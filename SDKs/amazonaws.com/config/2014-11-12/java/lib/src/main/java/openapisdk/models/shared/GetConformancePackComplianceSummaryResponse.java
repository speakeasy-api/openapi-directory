package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetConformancePackComplianceSummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConformancePackComplianceSummaryList")
    public ConformancePackComplianceSummary[] conformancePackComplianceSummaryList;
    public GetConformancePackComplianceSummaryResponse withConformancePackComplianceSummaryList(ConformancePackComplianceSummary[] conformancePackComplianceSummaryList) {
        this.conformancePackComplianceSummaryList = conformancePackComplianceSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetConformancePackComplianceSummaryResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}