package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConformancePacksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConformancePackDetails")
    public ConformancePackDetail[] conformancePackDetails;
    public DescribeConformancePacksResponse withConformancePackDetails(ConformancePackDetail[] conformancePackDetails) {
        this.conformancePackDetails = conformancePackDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeConformancePacksResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}