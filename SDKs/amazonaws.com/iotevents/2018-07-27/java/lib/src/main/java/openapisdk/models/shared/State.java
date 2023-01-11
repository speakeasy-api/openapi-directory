package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * State
 * Information that defines a state of a detector.
**/
public class State {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onEnter")
    public OnEnterLifecycle onEnter;
    public State withOnEnter(OnEnterLifecycle onEnter) {
        this.onEnter = onEnter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onExit")
    public OnExitLifecycle onExit;
    public State withOnExit(OnExitLifecycle onExit) {
        this.onExit = onExit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onInput")
    public OnInputLifecycle onInput;
    public State withOnInput(OnInputLifecycle onInput) {
        this.onInput = onInput;
        return this;
    }
    @JsonProperty("stateName")
    public String stateName;
    public State withStateName(String stateName) {
        this.stateName = stateName;
        return this;
    }
}