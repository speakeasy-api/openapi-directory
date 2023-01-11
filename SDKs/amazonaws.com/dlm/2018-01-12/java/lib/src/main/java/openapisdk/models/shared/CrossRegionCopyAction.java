package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CrossRegionCopyAction
 * Specifies a rule for copying shared snapshots across Regions.
**/
public class CrossRegionCopyAction {
    @JsonProperty("EncryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public CrossRegionCopyAction withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetainRule")
    public CrossRegionCopyRetainRule retainRule;
    public CrossRegionCopyAction withRetainRule(CrossRegionCopyRetainRule retainRule) {
        this.retainRule = retainRule;
        return this;
    }
    @JsonProperty("Target")
    public String target;
    public CrossRegionCopyAction withTarget(String target) {
        this.target = target;
        return this;
    }
}