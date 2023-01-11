package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSamplesRequest
 * Represents a request to the list samples operation.
**/
public class ListSamplesRequest {
    @JsonProperty("arn")
    public String arn;
    public ListSamplesRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListSamplesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}