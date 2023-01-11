package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribePlayerSessionsInput
 * Represents the input for a request operation.
**/
public class DescribePlayerSessionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionId")
    public String gameSessionId;
    public DescribePlayerSessionsInput withGameSessionId(String gameSessionId) {
        this.gameSessionId = gameSessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribePlayerSessionsInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribePlayerSessionsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerId")
    public String playerId;
    public DescribePlayerSessionsInput withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerSessionId")
    public String playerSessionId;
    public DescribePlayerSessionsInput withPlayerSessionId(String playerSessionId) {
        this.playerSessionId = playerSessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlayerSessionStatusFilter")
    public String playerSessionStatusFilter;
    public DescribePlayerSessionsInput withPlayerSessionStatusFilter(String playerSessionStatusFilter) {
        this.playerSessionStatusFilter = playerSessionStatusFilter;
        return this;
    }
}