package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeScalingPlanResourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeScalingPlanResourcesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingPlanResources")
    public ScalingPlanResource[] scalingPlanResources;
    public DescribeScalingPlanResourcesResponse withScalingPlanResources(ScalingPlanResource[] scalingPlanResources) {
        this.scalingPlanResources = scalingPlanResources;
        return this;
    }
}