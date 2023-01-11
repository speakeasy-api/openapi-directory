package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StudioMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityStoreId")
    public String identityStoreId;
    public StudioMembership withIdentityStoreId(String identityStoreId) {
        this.identityStoreId = identityStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persona")
    public StudioPersonaEnum persona;
    public StudioMembership withPersona(StudioPersonaEnum persona) {
        this.persona = persona;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalId")
    public String principalId;
    public StudioMembership withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
}