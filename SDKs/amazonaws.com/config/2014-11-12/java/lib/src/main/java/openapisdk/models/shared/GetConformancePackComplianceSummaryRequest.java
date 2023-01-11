package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetConformancePackComplianceSummaryRequest {
    @JsonProperty("ConformancePackNames")
    public String[] conformancePackNames;
    public GetConformancePackComplianceSummaryRequest withConformancePackNames(String[] conformancePackNames) {
        this.conformancePackNames = conformancePackNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public GetConformancePackComplianceSummaryRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetConformancePackComplianceSummaryRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}