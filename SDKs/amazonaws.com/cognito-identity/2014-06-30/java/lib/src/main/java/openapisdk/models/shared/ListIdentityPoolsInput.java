package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListIdentityPoolsInput
 * Input to the ListIdentityPools action.
**/
public class ListIdentityPoolsInput {
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListIdentityPoolsInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListIdentityPoolsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}