package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResendInvitationsForShareRequest {
    public ResendInvitationsForSharePathParams pathParams;
    public ResendInvitationsForShareRequest withPathParams(ResendInvitationsForSharePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResendInvitationsForShareHeaders headers;
    public ResendInvitationsForShareRequest withHeaders(ResendInvitationsForShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ResendInvitationsForShareResendInvitationsRequestBody request;
    public ResendInvitationsForShareRequest withRequest(ResendInvitationsForShareResendInvitationsRequestBody request) {
        this.request = request;
        return this;
    }
}