package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConformancePackStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConformancePackStatusDetails")
    public ConformancePackStatusDetail[] conformancePackStatusDetails;
    public DescribeConformancePackStatusResponse withConformancePackStatusDetails(ConformancePackStatusDetail[] conformancePackStatusDetails) {
        this.conformancePackStatusDetails = conformancePackStatusDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeConformancePackStatusResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}