package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteServerRequest {
    @JsonProperty("ServerName")
    public String serverName;
    public DeleteServerRequest withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
}