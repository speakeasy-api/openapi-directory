package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteGameServerGroupOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerGroup")
    public GameServerGroup gameServerGroup;
    public DeleteGameServerGroupOutput withGameServerGroup(GameServerGroup gameServerGroup) {
        this.gameServerGroup = gameServerGroup;
        return this;
    }
}