package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RejectInvitationRequest {
    public RejectInvitationHeaders headers;
    public RejectInvitationRequest withHeaders(RejectInvitationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RejectInvitationRequestBody request;
    public RejectInvitationRequest withRequest(RejectInvitationRequestBody request) {
        this.request = request;
        return this;
    }
}