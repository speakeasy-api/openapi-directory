package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DisableStageTransitionInput
 * Represents the input of a <code>DisableStageTransition</code> action.
**/
public class DisableStageTransitionInput {
    @JsonProperty("pipelineName")
    public String pipelineName;
    public DisableStageTransitionInput withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
    @JsonProperty("reason")
    public String reason;
    public DisableStageTransitionInput withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("stageName")
    public String stageName;
    public DisableStageTransitionInput withStageName(String stageName) {
        this.stageName = stageName;
        return this;
    }
    @JsonProperty("transitionType")
    public StageTransitionTypeEnum transitionType;
    public DisableStageTransitionInput withTransitionType(StageTransitionTypeEnum transitionType) {
        this.transitionType = transitionType;
        return this;
    }
}