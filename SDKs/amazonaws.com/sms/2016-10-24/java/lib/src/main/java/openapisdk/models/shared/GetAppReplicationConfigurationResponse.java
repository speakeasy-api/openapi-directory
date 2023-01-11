package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAppReplicationConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverGroupReplicationConfigurations")
    public ServerGroupReplicationConfiguration[] serverGroupReplicationConfigurations;
    public GetAppReplicationConfigurationResponse withServerGroupReplicationConfigurations(ServerGroupReplicationConfiguration[] serverGroupReplicationConfigurations) {
        this.serverGroupReplicationConfigurations = serverGroupReplicationConfigurations;
        return this;
    }
}