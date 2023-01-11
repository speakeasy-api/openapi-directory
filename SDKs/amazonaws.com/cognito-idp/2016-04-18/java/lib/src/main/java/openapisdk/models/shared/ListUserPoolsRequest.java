package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUserPoolsRequest
 * Represents the request to list user pools.
**/
public class ListUserPoolsRequest {
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListUserPoolsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListUserPoolsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}