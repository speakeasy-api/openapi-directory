package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AcceptAdministratorInvitationRequestBody {
    @JsonProperty("AdministratorId")
    public String administratorId;
    public AcceptAdministratorInvitationRequestBody withAdministratorId(String administratorId) {
        this.administratorId = administratorId;
        return this;
    }
    @JsonProperty("InvitationId")
    public String invitationId;
    public AcceptAdministratorInvitationRequestBody withInvitationId(String invitationId) {
        this.invitationId = invitationId;
        return this;
    }
}