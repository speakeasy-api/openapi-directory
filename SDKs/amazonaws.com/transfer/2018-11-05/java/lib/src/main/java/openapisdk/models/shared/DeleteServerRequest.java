package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteServerRequest {
    @JsonProperty("ServerId")
    public String serverId;
    public DeleteServerRequest withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
}