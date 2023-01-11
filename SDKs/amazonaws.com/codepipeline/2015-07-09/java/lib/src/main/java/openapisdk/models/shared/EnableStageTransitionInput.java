package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EnableStageTransitionInput
 * Represents the input of an <code>EnableStageTransition</code> action.
**/
public class EnableStageTransitionInput {
    @JsonProperty("pipelineName")
    public String pipelineName;
    public EnableStageTransitionInput withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
    @JsonProperty("stageName")
    public String stageName;
    public EnableStageTransitionInput withStageName(String stageName) {
        this.stageName = stageName;
        return this;
    }
    @JsonProperty("transitionType")
    public StageTransitionTypeEnum transitionType;
    public EnableStageTransitionInput withTransitionType(StageTransitionTypeEnum transitionType) {
        this.transitionType = transitionType;
        return this;
    }
}