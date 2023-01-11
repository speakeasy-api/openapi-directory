package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposDeleteInvitationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invitation_id")
    public Long invitationId;
    public ReposDeleteInvitationPathParams withInvitationId(Long invitationId) {
        this.invitationId = invitationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposDeleteInvitationPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposDeleteInvitationPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}