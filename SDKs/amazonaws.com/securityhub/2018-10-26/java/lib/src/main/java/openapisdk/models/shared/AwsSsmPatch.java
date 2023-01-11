package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsSsmPatch
 * Provides details about the compliance for a patch.
**/
public class AwsSsmPatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceSummary")
    public AwsSsmComplianceSummary complianceSummary;
    public AwsSsmPatch withComplianceSummary(AwsSsmComplianceSummary complianceSummary) {
        this.complianceSummary = complianceSummary;
        return this;
    }
}