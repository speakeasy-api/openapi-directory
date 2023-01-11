package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InitializeClusterResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public ClusterStateEnum state;
    public InitializeClusterResponse withState(ClusterStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateMessage")
    public String stateMessage;
    public InitializeClusterResponse withStateMessage(String stateMessage) {
        this.stateMessage = stateMessage;
        return this;
    }
}