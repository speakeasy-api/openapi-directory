package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeScalingActivitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeScalingActivitiesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingActivities")
    public ScalingActivity[] scalingActivities;
    public DescribeScalingActivitiesResponse withScalingActivities(ScalingActivity[] scalingActivities) {
        this.scalingActivities = scalingActivities;
        return this;
    }
}