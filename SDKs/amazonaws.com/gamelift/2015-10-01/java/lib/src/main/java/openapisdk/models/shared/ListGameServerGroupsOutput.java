package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGameServerGroupsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerGroups")
    public GameServerGroup[] gameServerGroups;
    public ListGameServerGroupsOutput withGameServerGroups(GameServerGroup[] gameServerGroups) {
        this.gameServerGroups = gameServerGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListGameServerGroupsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}