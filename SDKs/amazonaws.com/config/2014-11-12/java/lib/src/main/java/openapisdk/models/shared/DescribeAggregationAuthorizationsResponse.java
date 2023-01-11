package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAggregationAuthorizationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AggregationAuthorizations")
    public AggregationAuthorization[] aggregationAuthorizations;
    public DescribeAggregationAuthorizationsResponse withAggregationAuthorizations(AggregationAuthorization[] aggregationAuthorizations) {
        this.aggregationAuthorizations = aggregationAuthorizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeAggregationAuthorizationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}