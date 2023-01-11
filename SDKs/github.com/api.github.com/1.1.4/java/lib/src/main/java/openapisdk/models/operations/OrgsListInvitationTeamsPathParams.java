package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListInvitationTeamsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invitation_id")
    public Long invitationId;
    public OrgsListInvitationTeamsPathParams withInvitationId(Long invitationId) {
        this.invitationId = invitationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsListInvitationTeamsPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}