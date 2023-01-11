package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeGameServerInput {
    @JsonProperty("GameServerGroupName")
    public String gameServerGroupName;
    public DescribeGameServerInput withGameServerGroupName(String gameServerGroupName) {
        this.gameServerGroupName = gameServerGroupName;
        return this;
    }
    @JsonProperty("GameServerId")
    public String gameServerId;
    public DescribeGameServerInput withGameServerId(String gameServerId) {
        this.gameServerId = gameServerId;
        return this;
    }
}