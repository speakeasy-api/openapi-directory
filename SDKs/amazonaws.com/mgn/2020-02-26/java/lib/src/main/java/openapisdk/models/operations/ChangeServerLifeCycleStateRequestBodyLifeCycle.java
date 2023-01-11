package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChangeServerLifeCycleStateRequestBodyLifeCycle
 * The request to change the source server migration lifecycle state.
**/
public class ChangeServerLifeCycleStateRequestBodyLifeCycle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public openapisdk.models.shared.ChangeServerLifeCycleStateSourceServerLifecycleStateEnum state;
    public ChangeServerLifeCycleStateRequestBodyLifeCycle withState(openapisdk.models.shared.ChangeServerLifeCycleStateSourceServerLifecycleStateEnum state) {
        this.state = state;
        return this;
    }
}