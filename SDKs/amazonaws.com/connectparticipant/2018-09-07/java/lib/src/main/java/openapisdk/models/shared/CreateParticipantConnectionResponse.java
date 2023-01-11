package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateParticipantConnectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionCredentials")
    public ConnectionCredentials connectionCredentials;
    public CreateParticipantConnectionResponse withConnectionCredentials(ConnectionCredentials connectionCredentials) {
        this.connectionCredentials = connectionCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Websocket")
    public Websocket websocket;
    public CreateParticipantConnectionResponse withWebsocket(Websocket websocket) {
        this.websocket = websocket;
        return this;
    }
}