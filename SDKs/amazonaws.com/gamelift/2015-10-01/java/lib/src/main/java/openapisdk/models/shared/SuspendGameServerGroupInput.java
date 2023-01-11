package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SuspendGameServerGroupInput {
    @JsonProperty("GameServerGroupName")
    public String gameServerGroupName;
    public SuspendGameServerGroupInput withGameServerGroupName(String gameServerGroupName) {
        this.gameServerGroupName = gameServerGroupName;
        return this;
    }
    @JsonProperty("SuspendActions")
    public GameServerGroupActionEnum[] suspendActions;
    public SuspendGameServerGroupInput withSuspendActions(GameServerGroupActionEnum[] suspendActions) {
        this.suspendActions = suspendActions;
        return this;
    }
}