package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListIdentityPoolsResponse
 * The result of a successful ListIdentityPools action.
**/
public class ListIdentityPoolsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPools")
    public IdentityPoolShortDescription[] identityPools;
    public ListIdentityPoolsResponse withIdentityPools(IdentityPoolShortDescription[] identityPools) {
        this.identityPools = identityPools;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListIdentityPoolsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}