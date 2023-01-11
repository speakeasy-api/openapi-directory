package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptInvitationRequest {
    public AcceptInvitationHeaders headers;
    public AcceptInvitationRequest withHeaders(AcceptInvitationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AcceptInvitationRequestBody request;
    public AcceptInvitationRequest withRequest(AcceptInvitationRequestBody request) {
        this.request = request;
        return this;
    }
}