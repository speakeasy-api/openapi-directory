package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClaimGameServerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerData")
    public String gameServerData;
    public ClaimGameServerInput withGameServerData(String gameServerData) {
        this.gameServerData = gameServerData;
        return this;
    }
    @JsonProperty("GameServerGroupName")
    public String gameServerGroupName;
    public ClaimGameServerInput withGameServerGroupName(String gameServerGroupName) {
        this.gameServerGroupName = gameServerGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerId")
    public String gameServerId;
    public ClaimGameServerInput withGameServerId(String gameServerId) {
        this.gameServerId = gameServerId;
        return this;
    }
}