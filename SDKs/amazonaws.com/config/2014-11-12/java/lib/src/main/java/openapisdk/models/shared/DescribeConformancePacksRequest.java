package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConformancePacksRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConformancePackNames")
    public String[] conformancePackNames;
    public DescribeConformancePacksRequest withConformancePackNames(String[] conformancePackNames) {
        this.conformancePackNames = conformancePackNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeConformancePacksRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeConformancePacksRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}