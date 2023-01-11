package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InviteMembersRequest {
    public InviteMembersHeaders headers;
    public InviteMembersRequest withHeaders(InviteMembersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public InviteMembersRequestBody request;
    public InviteMembersRequest withRequest(InviteMembersRequestBody request) {
        this.request = request;
        return this;
    }
}