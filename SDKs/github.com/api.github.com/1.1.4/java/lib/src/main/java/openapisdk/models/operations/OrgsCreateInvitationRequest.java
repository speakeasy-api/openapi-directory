package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsCreateInvitationRequest {
    public OrgsCreateInvitationPathParams pathParams;
    public OrgsCreateInvitationRequest withPathParams(OrgsCreateInvitationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OrgsCreateInvitationRequestBody request;
    public OrgsCreateInvitationRequest withRequest(OrgsCreateInvitationRequestBody request) {
        this.request = request;
        return this;
    }
}