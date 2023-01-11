package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeGameSessionsOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeGameSessionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessions")
    public GameSession[] gameSessions;
    public DescribeGameSessionsOutput withGameSessions(GameSession[] gameSessions) {
        this.gameSessions = gameSessions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeGameSessionsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}