package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTestsRequest
 * Represents a request to the list tests operation.
**/
public class ListTestsRequest {
    @JsonProperty("arn")
    public String arn;
    public ListTestsRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTestsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}