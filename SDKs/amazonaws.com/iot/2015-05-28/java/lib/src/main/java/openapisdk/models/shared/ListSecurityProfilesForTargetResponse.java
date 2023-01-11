package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSecurityProfilesForTargetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListSecurityProfilesForTargetResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileTargetMappings")
    public SecurityProfileTargetMapping[] securityProfileTargetMappings;
    public ListSecurityProfilesForTargetResponse withSecurityProfileTargetMappings(SecurityProfileTargetMapping[] securityProfileTargetMappings) {
        this.securityProfileTargetMappings = securityProfileTargetMappings;
        return this;
    }
}