package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSecurityProfilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListSecurityProfilesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileIdentifiers")
    public SecurityProfileIdentifier[] securityProfileIdentifiers;
    public ListSecurityProfilesResponse withSecurityProfileIdentifiers(SecurityProfileIdentifier[] securityProfileIdentifiers) {
        this.securityProfileIdentifiers = securityProfileIdentifiers;
        return this;
    }
}