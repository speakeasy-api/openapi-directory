package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewStudioMember {
    @JsonProperty("persona")
    public StudioPersonaEnum persona;
    public NewStudioMember withPersona(StudioPersonaEnum persona) {
        this.persona = persona;
        return this;
    }
    @JsonProperty("principalId")
    public String principalId;
    public NewStudioMember withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
}