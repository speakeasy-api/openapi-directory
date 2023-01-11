package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartServerRequest {
    @JsonProperty("ServerId")
    public String serverId;
    public StartServerRequest withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
}