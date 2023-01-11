package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecurityProfileTargetMapping
 * Information about a security profile and the target associated with it.
**/
public class SecurityProfileTargetMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileIdentifier")
    public SecurityProfileIdentifier securityProfileIdentifier;
    public SecurityProfileTargetMapping withSecurityProfileIdentifier(SecurityProfileIdentifier securityProfileIdentifier) {
        this.securityProfileIdentifier = securityProfileIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public SecurityProfileTarget target;
    public SecurityProfileTargetMapping withTarget(SecurityProfileTarget target) {
        this.target = target;
        return this;
    }
}