package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetComplianceSummaryByConfigRuleResponse
 * <p/>
**/
public class GetComplianceSummaryByConfigRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceSummary")
    public ComplianceSummary complianceSummary;
    public GetComplianceSummaryByConfigRuleResponse withComplianceSummary(ComplianceSummary complianceSummary) {
        this.complianceSummary = complianceSummary;
        return this;
    }
}