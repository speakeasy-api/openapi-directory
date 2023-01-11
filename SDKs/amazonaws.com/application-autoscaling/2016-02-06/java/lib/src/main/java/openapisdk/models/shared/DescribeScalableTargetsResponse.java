package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeScalableTargetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeScalableTargetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalableTargets")
    public ScalableTarget[] scalableTargets;
    public DescribeScalableTargetsResponse withScalableTargets(ScalableTarget[] scalableTargets) {
        this.scalableTargets = scalableTargets;
        return this;
    }
}