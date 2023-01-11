package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchGameSessionsOutput
 * Represents the returned data in response to a request operation.
**/
public class SearchGameSessionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessions")
    public GameSession[] gameSessions;
    public SearchGameSessionsOutput withGameSessions(GameSession[] gameSessions) {
        this.gameSessions = gameSessions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public SearchGameSessionsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}