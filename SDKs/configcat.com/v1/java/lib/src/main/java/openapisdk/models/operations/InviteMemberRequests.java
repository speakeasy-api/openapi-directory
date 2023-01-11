package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InviteMemberRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.InviteMembersRequest inviteMembersRequest;
    public InviteMemberRequests withInviteMembersRequest(openapisdk.models.shared.InviteMembersRequest inviteMembersRequest) {
        this.inviteMembersRequest = inviteMembersRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InviteMembersRequest inviteMembersRequest1;
    public InviteMemberRequests withInviteMembersRequest1(openapisdk.models.shared.InviteMembersRequest inviteMembersRequest1) {
        this.inviteMembersRequest1 = inviteMembersRequest1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.InviteMembersRequest inviteMembersRequest2;
    public InviteMemberRequests withInviteMembersRequest2(openapisdk.models.shared.InviteMembersRequest inviteMembersRequest2) {
        this.inviteMembersRequest2 = inviteMembersRequest2;
        return this;
    }
}