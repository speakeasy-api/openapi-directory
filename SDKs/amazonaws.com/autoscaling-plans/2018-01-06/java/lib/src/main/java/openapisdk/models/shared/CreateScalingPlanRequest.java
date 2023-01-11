package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateScalingPlanRequest {
    @JsonProperty("ApplicationSource")
    public ApplicationSource applicationSource;
    public CreateScalingPlanRequest withApplicationSource(ApplicationSource applicationSource) {
        this.applicationSource = applicationSource;
        return this;
    }
    @JsonProperty("ScalingInstructions")
    public ScalingInstruction[] scalingInstructions;
    public CreateScalingPlanRequest withScalingInstructions(ScalingInstruction[] scalingInstructions) {
        this.scalingInstructions = scalingInstructions;
        return this;
    }
    @JsonProperty("ScalingPlanName")
    public String scalingPlanName;
    public CreateScalingPlanRequest withScalingPlanName(String scalingPlanName) {
        this.scalingPlanName = scalingPlanName;
        return this;
    }
}