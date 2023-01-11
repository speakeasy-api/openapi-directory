package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WebBackendConnectionReadList {
    @JsonProperty("connections")
    public WebBackendConnectionRead[] connections;
    public WebBackendConnectionReadList withConnections(WebBackendConnectionRead[] connections) {
        this.connections = connections;
        return this;
    }
}