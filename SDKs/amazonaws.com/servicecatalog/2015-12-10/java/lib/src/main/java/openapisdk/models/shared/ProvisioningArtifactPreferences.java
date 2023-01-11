package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisioningArtifactPreferences
 * <p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>AWS CloudFormation User Guide</i>.</p>
**/
public class ProvisioningArtifactPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackSetAccounts")
    public String[] stackSetAccounts;
    public ProvisioningArtifactPreferences withStackSetAccounts(String[] stackSetAccounts) {
        this.stackSetAccounts = stackSetAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackSetRegions")
    public String[] stackSetRegions;
    public ProvisioningArtifactPreferences withStackSetRegions(String[] stackSetRegions) {
        this.stackSetRegions = stackSetRegions;
        return this;
    }
}