package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateShareInvitationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ShareInvitationId")
    public String shareInvitationId;
    public UpdateShareInvitationPathParams withShareInvitationId(String shareInvitationId) {
        this.shareInvitationId = shareInvitationId;
        return this;
    }
}