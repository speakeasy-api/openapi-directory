package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteScalingPlanRequest {
    @JsonProperty("ScalingPlanName")
    public String scalingPlanName;
    public DeleteScalingPlanRequest withScalingPlanName(String scalingPlanName) {
        this.scalingPlanName = scalingPlanName;
        return this;
    }
    @JsonProperty("ScalingPlanVersion")
    public Long scalingPlanVersion;
    public DeleteScalingPlanRequest withScalingPlanVersion(Long scalingPlanVersion) {
        this.scalingPlanVersion = scalingPlanVersion;
        return this;
    }
}