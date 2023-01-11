package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposAcceptInvitationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invitation_id")
    public Long invitationId;
    public ReposAcceptInvitationPathParams withInvitationId(Long invitationId) {
        this.invitationId = invitationId;
        return this;
    }
}