package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LookupDeveloperIdentityInput
 * Input to the <code>LookupDeveloperIdentityInput</code> action.
**/
public class LookupDeveloperIdentityInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeveloperUserIdentifier")
    public String developerUserIdentifier;
    public LookupDeveloperIdentityInput withDeveloperUserIdentifier(String developerUserIdentifier) {
        this.developerUserIdentifier = developerUserIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityId")
    public String identityId;
    public LookupDeveloperIdentityInput withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public LookupDeveloperIdentityInput withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public LookupDeveloperIdentityInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public LookupDeveloperIdentityInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}