package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConfirmConnectionRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public ConfirmConnectionRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
}