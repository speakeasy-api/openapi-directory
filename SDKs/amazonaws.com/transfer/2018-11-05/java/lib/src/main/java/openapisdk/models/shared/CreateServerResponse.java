package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateServerResponse {
    @JsonProperty("ServerId")
    public String serverId;
    public CreateServerResponse withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
}