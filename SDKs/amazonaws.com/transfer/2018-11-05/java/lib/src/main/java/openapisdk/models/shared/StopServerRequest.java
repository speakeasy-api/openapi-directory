package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopServerRequest {
    @JsonProperty("ServerId")
    public String serverId;
    public StopServerRequest withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
}