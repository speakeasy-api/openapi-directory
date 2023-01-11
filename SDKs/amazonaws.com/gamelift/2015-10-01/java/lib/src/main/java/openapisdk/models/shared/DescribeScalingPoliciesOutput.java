package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeScalingPoliciesOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeScalingPoliciesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeScalingPoliciesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingPolicies")
    public ScalingPolicy[] scalingPolicies;
    public DescribeScalingPoliciesOutput withScalingPolicies(ScalingPolicy[] scalingPolicies) {
        this.scalingPolicies = scalingPolicies;
        return this;
    }
}