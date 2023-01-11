package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUserPoolsResponse
 * Represents the response to list user pools.
**/
public class ListUserPoolsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListUserPoolsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPools")
    public UserPoolDescriptionType[] userPools;
    public ListUserPoolsResponse withUserPools(UserPoolDescriptionType[] userPools) {
        this.userPools = userPools;
        return this;
    }
}