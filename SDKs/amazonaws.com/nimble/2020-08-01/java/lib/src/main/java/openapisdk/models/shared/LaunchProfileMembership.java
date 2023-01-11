package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LaunchProfileMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityStoreId")
    public String identityStoreId;
    public LaunchProfileMembership withIdentityStoreId(String identityStoreId) {
        this.identityStoreId = identityStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persona")
    public LaunchProfilePersonaEnum persona;
    public LaunchProfileMembership withPersona(LaunchProfilePersonaEnum persona) {
        this.persona = persona;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalId")
    public String principalId;
    public LaunchProfileMembership withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
}