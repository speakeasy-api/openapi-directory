package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribePlayerSessionsOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribePlayerSessionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribePlayerSessionsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerSessions")
    public PlayerSession[] playerSessions;
    public DescribePlayerSessionsOutput withPlayerSessions(PlayerSession[] playerSessions) {
        this.playerSessions = playerSessions;
        return this;
    }
}