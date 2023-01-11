package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServerReplicationConfiguration
 * Replication configuration of a server.
**/
public class ServerReplicationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public Server server;
    public ServerReplicationConfiguration withServer(Server server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverReplicationParameters")
    public ServerReplicationParameters serverReplicationParameters;
    public ServerReplicationConfiguration withServerReplicationParameters(ServerReplicationParameters serverReplicationParameters) {
        this.serverReplicationParameters = serverReplicationParameters;
        return this;
    }
}