package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteConnectionRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public DeleteConnectionRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
}