package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAccessPointsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessPoints")
    public AccessPointDescription[] accessPoints;
    public DescribeAccessPointsResponse withAccessPoints(AccessPointDescription[] accessPoints) {
        this.accessPoints = accessPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeAccessPointsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}