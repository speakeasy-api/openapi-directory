package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteGameServerGroupInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteOption")
    public GameServerGroupDeleteOptionEnum deleteOption;
    public DeleteGameServerGroupInput withDeleteOption(GameServerGroupDeleteOptionEnum deleteOption) {
        this.deleteOption = deleteOption;
        return this;
    }
    @JsonProperty("GameServerGroupName")
    public String gameServerGroupName;
    public DeleteGameServerGroupInput withGameServerGroupName(String gameServerGroupName) {
        this.gameServerGroupName = gameServerGroupName;
        return this;
    }
}