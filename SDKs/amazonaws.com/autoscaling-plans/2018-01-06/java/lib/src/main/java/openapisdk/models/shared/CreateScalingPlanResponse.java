package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateScalingPlanResponse {
    @JsonProperty("ScalingPlanVersion")
    public Long scalingPlanVersion;
    public CreateScalingPlanResponse withScalingPlanVersion(Long scalingPlanVersion) {
        this.scalingPlanVersion = scalingPlanVersion;
        return this;
    }
}