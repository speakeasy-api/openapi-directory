package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUserPoolClientsRequest
 * Represents the request to list the user pool clients.
**/
public class ListUserPoolClientsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListUserPoolClientsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListUserPoolClientsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public ListUserPoolClientsRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}