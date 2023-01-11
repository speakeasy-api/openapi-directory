package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRunsRequest
 * Represents a request to the list runs operation.
**/
public class ListRunsRequest {
    @JsonProperty("arn")
    public String arn;
    public ListRunsRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListRunsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}