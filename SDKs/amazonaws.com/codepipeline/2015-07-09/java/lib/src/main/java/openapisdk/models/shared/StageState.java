package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StageState
 * Represents information about the state of the stage.
**/
public class StageState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionStates")
    public ActionState[] actionStates;
    public StageState withActionStates(ActionState[] actionStates) {
        this.actionStates = actionStates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inboundExecution")
    public StageExecution inboundExecution;
    public StageState withInboundExecution(StageExecution inboundExecution) {
        this.inboundExecution = inboundExecution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inboundTransitionState")
    public TransitionState inboundTransitionState;
    public StageState withInboundTransitionState(TransitionState inboundTransitionState) {
        this.inboundTransitionState = inboundTransitionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestExecution")
    public StageExecution latestExecution;
    public StageState withLatestExecution(StageExecution latestExecution) {
        this.latestExecution = latestExecution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stageName")
    public String stageName;
    public StageState withStageName(String stageName) {
        this.stageName = stageName;
        return this;
    }
}