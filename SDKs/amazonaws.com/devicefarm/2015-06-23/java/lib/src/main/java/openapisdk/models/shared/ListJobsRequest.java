package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListJobsRequest
 * Represents a request to the list jobs operation.
**/
public class ListJobsRequest {
    @JsonProperty("arn")
    public String arn;
    public ListJobsRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}