package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeGameServerInstancesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerInstances")
    public GameServerInstance[] gameServerInstances;
    public DescribeGameServerInstancesOutput withGameServerInstances(GameServerInstance[] gameServerInstances) {
        this.gameServerInstances = gameServerInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeGameServerInstancesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}