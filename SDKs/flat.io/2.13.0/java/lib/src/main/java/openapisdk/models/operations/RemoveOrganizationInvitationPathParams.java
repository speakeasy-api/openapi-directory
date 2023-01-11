package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveOrganizationInvitationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invitation")
    public String invitation;
    public RemoveOrganizationInvitationPathParams withInvitation(String invitation) {
        this.invitation = invitation;
        return this;
    }
}