package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptResourceShareInvitationRequest {
    public AcceptResourceShareInvitationHeaders headers;
    public AcceptResourceShareInvitationRequest withHeaders(AcceptResourceShareInvitationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AcceptResourceShareInvitationRequestBody request;
    public AcceptResourceShareInvitationRequest withRequest(AcceptResourceShareInvitationRequestBody request) {
        this.request = request;
        return this;
    }
}