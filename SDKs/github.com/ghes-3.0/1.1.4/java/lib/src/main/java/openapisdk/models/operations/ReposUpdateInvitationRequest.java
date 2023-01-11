package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateInvitationRequest {
    public ReposUpdateInvitationPathParams pathParams;
    public ReposUpdateInvitationRequest withPathParams(ReposUpdateInvitationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposUpdateInvitationRequestBody request;
    public ReposUpdateInvitationRequest withRequest(ReposUpdateInvitationRequestBody request) {
        this.request = request;
        return this;
    }
}