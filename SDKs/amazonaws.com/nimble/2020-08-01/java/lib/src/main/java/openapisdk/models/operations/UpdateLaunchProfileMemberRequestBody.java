package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateLaunchProfileMemberRequestBody {
    @JsonProperty("persona")
    public UpdateLaunchProfileMemberRequestBodyPersonaEnum persona;
    public UpdateLaunchProfileMemberRequestBody withPersona(UpdateLaunchProfileMemberRequestBodyPersonaEnum persona) {
        this.persona = persona;
        return this;
    }
}