package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConnectionReadList {
    @JsonProperty("connections")
    public ConnectionRead[] connections;
    public ConnectionReadList withConnections(ConnectionRead[] connections) {
        this.connections = connections;
        return this;
    }
}