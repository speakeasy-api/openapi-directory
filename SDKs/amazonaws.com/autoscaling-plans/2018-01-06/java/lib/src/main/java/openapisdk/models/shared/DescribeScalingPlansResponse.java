package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeScalingPlansResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeScalingPlansResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingPlans")
    public ScalingPlan[] scalingPlans;
    public DescribeScalingPlansResponse withScalingPlans(ScalingPlan[] scalingPlans) {
        this.scalingPlans = scalingPlans;
        return this;
    }
}