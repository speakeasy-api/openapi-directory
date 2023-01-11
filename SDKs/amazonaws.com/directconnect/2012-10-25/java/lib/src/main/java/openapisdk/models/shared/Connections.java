package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Connections {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connections")
    public Connection[] connections;
    public Connections withConnections(Connection[] connections) {
        this.connections = connections;
        return this;
    }
}