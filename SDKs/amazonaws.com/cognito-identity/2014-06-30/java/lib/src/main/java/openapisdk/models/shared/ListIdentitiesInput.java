package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListIdentitiesInput
 * Input to the ListIdentities action.
**/
public class ListIdentitiesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HideDisabled")
    public Boolean hideDisabled;
    public ListIdentitiesInput withHideDisabled(Boolean hideDisabled) {
        this.hideDisabled = hideDisabled;
        return this;
    }
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public ListIdentitiesInput withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListIdentitiesInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListIdentitiesInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}