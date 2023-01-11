package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateInvitationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invitation_id")
    public Long invitationId;
    public ReposUpdateInvitationPathParams withInvitationId(Long invitationId) {
        this.invitationId = invitationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposUpdateInvitationPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposUpdateInvitationPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}