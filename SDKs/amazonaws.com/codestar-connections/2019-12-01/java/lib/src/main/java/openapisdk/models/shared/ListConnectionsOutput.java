package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConnectionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Connections")
    public Connection[] connections;
    public ListConnectionsOutput withConnections(Connection[] connections) {
        this.connections = connections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListConnectionsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}