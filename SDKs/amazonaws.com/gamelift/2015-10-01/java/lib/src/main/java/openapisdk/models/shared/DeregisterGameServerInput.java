package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeregisterGameServerInput {
    @JsonProperty("GameServerGroupName")
    public String gameServerGroupName;
    public DeregisterGameServerInput withGameServerGroupName(String gameServerGroupName) {
        this.gameServerGroupName = gameServerGroupName;
        return this;
    }
    @JsonProperty("GameServerId")
    public String gameServerId;
    public DeregisterGameServerInput withGameServerId(String gameServerId) {
        this.gameServerId = gameServerId;
        return this;
    }
}