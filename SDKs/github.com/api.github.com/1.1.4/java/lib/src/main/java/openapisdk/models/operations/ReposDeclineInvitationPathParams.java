package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposDeclineInvitationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invitation_id")
    public Long invitationId;
    public ReposDeclineInvitationPathParams withInvitationId(Long invitationId) {
        this.invitationId = invitationId;
        return this;
    }
}