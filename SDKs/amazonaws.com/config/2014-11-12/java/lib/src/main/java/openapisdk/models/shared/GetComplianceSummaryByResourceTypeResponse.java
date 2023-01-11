package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetComplianceSummaryByResourceTypeResponse
 * <p/>
**/
public class GetComplianceSummaryByResourceTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceSummariesByResourceType")
    public ComplianceSummaryByResourceType[] complianceSummariesByResourceType;
    public GetComplianceSummaryByResourceTypeResponse withComplianceSummariesByResourceType(ComplianceSummaryByResourceType[] complianceSummariesByResourceType) {
        this.complianceSummariesByResourceType = complianceSummariesByResourceType;
        return this;
    }
}