package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AcceptInvitationRequestBody {
    @JsonProperty("InvitationId")
    public String invitationId;
    public AcceptInvitationRequestBody withInvitationId(String invitationId) {
        this.invitationId = invitationId;
        return this;
    }
    @JsonProperty("MasterId")
    public String masterId;
    public AcceptInvitationRequestBody withMasterId(String masterId) {
        this.masterId = masterId;
        return this;
    }
}