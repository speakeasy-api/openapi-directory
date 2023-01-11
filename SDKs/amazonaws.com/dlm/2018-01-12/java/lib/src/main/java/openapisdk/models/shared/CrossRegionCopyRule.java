package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CrossRegionCopyRule
 * Specifies a rule for cross-Region snapshot copies.
**/
public class CrossRegionCopyRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CmkArn")
    public String cmkArn;
    public CrossRegionCopyRule withCmkArn(String cmkArn) {
        this.cmkArn = cmkArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CopyTags")
    public Boolean copyTags;
    public CrossRegionCopyRule withCopyTags(Boolean copyTags) {
        this.copyTags = copyTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeprecateRule")
    public CrossRegionCopyDeprecateRule deprecateRule;
    public CrossRegionCopyRule withDeprecateRule(CrossRegionCopyDeprecateRule deprecateRule) {
        this.deprecateRule = deprecateRule;
        return this;
    }
    @JsonProperty("Encrypted")
    public Boolean encrypted;
    public CrossRegionCopyRule withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetainRule")
    public CrossRegionCopyRetainRule retainRule;
    public CrossRegionCopyRule withRetainRule(CrossRegionCopyRetainRule retainRule) {
        this.retainRule = retainRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Target")
    public String target;
    public CrossRegionCopyRule withTarget(String target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetRegion")
    public String targetRegion;
    public CrossRegionCopyRule withTargetRegion(String targetRegion) {
        this.targetRegion = targetRegion;
        return this;
    }
}