package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LookupDeveloperIdentityResponse
 * Returned in response to a successful <code>LookupDeveloperIdentity</code> action.
**/
public class LookupDeveloperIdentityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeveloperUserIdentifierList")
    public String[] developerUserIdentifierList;
    public LookupDeveloperIdentityResponse withDeveloperUserIdentifierList(String[] developerUserIdentifierList) {
        this.developerUserIdentifierList = developerUserIdentifierList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityId")
    public String identityId;
    public LookupDeveloperIdentityResponse withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public LookupDeveloperIdentityResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}