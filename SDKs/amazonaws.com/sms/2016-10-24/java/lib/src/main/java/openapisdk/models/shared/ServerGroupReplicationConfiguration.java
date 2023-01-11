package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServerGroupReplicationConfiguration
 * Replication configuration for a server group.
**/
public class ServerGroupReplicationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverGroupId")
    public String serverGroupId;
    public ServerGroupReplicationConfiguration withServerGroupId(String serverGroupId) {
        this.serverGroupId = serverGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverReplicationConfigurations")
    public ServerReplicationConfiguration[] serverReplicationConfigurations;
    public ServerGroupReplicationConfiguration withServerReplicationConfigurations(ServerReplicationConfiguration[] serverReplicationConfigurations) {
        this.serverReplicationConfigurations = serverReplicationConfigurations;
        return this;
    }
}