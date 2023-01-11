package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateServerResponse {
    @JsonProperty("ServerId")
    public String serverId;
    public UpdateServerResponse withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
}