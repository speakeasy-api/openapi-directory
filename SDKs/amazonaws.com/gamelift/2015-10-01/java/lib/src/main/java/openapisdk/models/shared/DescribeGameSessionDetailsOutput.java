package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeGameSessionDetailsOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeGameSessionDetailsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionDetails")
    public GameSessionDetail[] gameSessionDetails;
    public DescribeGameSessionDetailsOutput withGameSessionDetails(GameSessionDetail[] gameSessionDetails) {
        this.gameSessionDetails = gameSessionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeGameSessionDetailsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}