package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateShareInvitationRequest {
    public UpdateShareInvitationPathParams pathParams;
    public UpdateShareInvitationRequest withPathParams(UpdateShareInvitationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateShareInvitationHeaders headers;
    public UpdateShareInvitationRequest withHeaders(UpdateShareInvitationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateShareInvitationRequestBody request;
    public UpdateShareInvitationRequest withRequest(UpdateShareInvitationRequestBody request) {
        this.request = request;
        return this;
    }
}