package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsSsmPatchComplianceDetails
 * Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.
**/
public class AwsSsmPatchComplianceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Patch")
    public AwsSsmPatch patch;
    public AwsSsmPatchComplianceDetails withPatch(AwsSsmPatch patch) {
        this.patch = patch;
        return this;
    }
}