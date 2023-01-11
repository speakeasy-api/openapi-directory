package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeScalingPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeScalingPoliciesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingPolicies")
    public ScalingPolicy[] scalingPolicies;
    public DescribeScalingPoliciesResponse withScalingPolicies(ScalingPolicy[] scalingPolicies) {
        this.scalingPolicies = scalingPolicies;
        return this;
    }
}