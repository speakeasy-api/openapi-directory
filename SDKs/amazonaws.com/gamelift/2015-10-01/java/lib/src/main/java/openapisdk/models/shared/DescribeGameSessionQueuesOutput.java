package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeGameSessionQueuesOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeGameSessionQueuesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionQueues")
    public GameSessionQueue[] gameSessionQueues;
    public DescribeGameSessionQueuesOutput withGameSessionQueues(GameSessionQueue[] gameSessionQueues) {
        this.gameSessionQueues = gameSessionQueues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeGameSessionQueuesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}