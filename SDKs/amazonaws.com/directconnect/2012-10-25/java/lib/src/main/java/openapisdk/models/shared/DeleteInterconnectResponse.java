package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteInterconnectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interconnectState")
    public InterconnectStateEnum interconnectState;
    public DeleteInterconnectResponse withInterconnectState(InterconnectStateEnum interconnectState) {
        this.interconnectState = interconnectState;
        return this;
    }
}