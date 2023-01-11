package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RejectResourceShareInvitationRequest {
    public RejectResourceShareInvitationHeaders headers;
    public RejectResourceShareInvitationRequest withHeaders(RejectResourceShareInvitationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RejectResourceShareInvitationRequestBody request;
    public RejectResourceShareInvitationRequest withRequest(RejectResourceShareInvitationRequestBody request) {
        this.request = request;
        return this;
    }
}