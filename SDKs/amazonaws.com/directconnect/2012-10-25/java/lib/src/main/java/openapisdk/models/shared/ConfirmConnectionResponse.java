package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfirmConnectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionState")
    public ConnectionStateEnum connectionState;
    public ConfirmConnectionResponse withConnectionState(ConnectionStateEnum connectionState) {
        this.connectionState = connectionState;
        return this;
    }
}