package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUniqueProblemsRequest
 * Represents a request to the list unique problems operation.
**/
public class ListUniqueProblemsRequest {
    @JsonProperty("arn")
    public String arn;
    public ListUniqueProblemsRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListUniqueProblemsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}