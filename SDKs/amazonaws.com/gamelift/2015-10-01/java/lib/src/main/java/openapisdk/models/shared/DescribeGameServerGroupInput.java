package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeGameServerGroupInput {
    @JsonProperty("GameServerGroupName")
    public String gameServerGroupName;
    public DescribeGameServerGroupInput withGameServerGroupName(String gameServerGroupName) {
        this.gameServerGroupName = gameServerGroupName;
        return this;
    }
}