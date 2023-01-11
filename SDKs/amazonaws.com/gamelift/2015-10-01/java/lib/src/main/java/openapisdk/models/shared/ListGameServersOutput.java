package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGameServersOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServers")
    public GameServer[] gameServers;
    public ListGameServersOutput withGameServers(GameServer[] gameServers) {
        this.gameServers = gameServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListGameServersOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}