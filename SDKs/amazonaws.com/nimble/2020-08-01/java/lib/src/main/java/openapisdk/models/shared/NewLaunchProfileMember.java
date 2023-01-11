package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewLaunchProfileMember {
    @JsonProperty("persona")
    public LaunchProfilePersonaEnum persona;
    public NewLaunchProfileMember withPersona(LaunchProfilePersonaEnum persona) {
        this.persona = persona;
        return this;
    }
    @JsonProperty("principalId")
    public String principalId;
    public NewLaunchProfileMember withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
}