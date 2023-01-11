package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEmailIdentitiesResponse
 * A list of all of the identities that you've attempted to verify for use with Amazon Pinpoint, regardless of whether or not those identities were successfully verified.
**/
public class ListEmailIdentitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailIdentities")
    public IdentityInfo[] emailIdentities;
    public ListEmailIdentitiesResponse withEmailIdentities(IdentityInfo[] emailIdentities) {
        this.emailIdentities = emailIdentities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEmailIdentitiesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}