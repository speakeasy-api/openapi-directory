package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateShareInvitationRequestBody {
    @JsonProperty("ShareInvitationAction")
    public UpdateShareInvitationRequestBodyShareInvitationActionEnum shareInvitationAction;
    public UpdateShareInvitationRequestBody withShareInvitationAction(UpdateShareInvitationRequestBodyShareInvitationActionEnum shareInvitationAction) {
        this.shareInvitationAction = shareInvitationAction;
        return this;
    }
}