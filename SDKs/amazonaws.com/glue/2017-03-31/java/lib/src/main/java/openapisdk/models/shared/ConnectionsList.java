package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionsList
 * Specifies the connections used by a job.
**/
public class ConnectionsList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Connections")
    public String[] connections;
    public ConnectionsList withConnections(String[] connections) {
        this.connections = connections;
        return this;
    }
}