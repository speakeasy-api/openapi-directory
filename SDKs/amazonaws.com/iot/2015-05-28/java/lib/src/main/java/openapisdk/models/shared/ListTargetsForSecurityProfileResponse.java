package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTargetsForSecurityProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTargetsForSecurityProfileResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileTargets")
    public SecurityProfileTarget[] securityProfileTargets;
    public ListTargetsForSecurityProfileResponse withSecurityProfileTargets(SecurityProfileTarget[] securityProfileTargets) {
        this.securityProfileTargets = securityProfileTargets;
        return this;
    }
}