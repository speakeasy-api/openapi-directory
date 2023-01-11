package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeclineInvitationsRequest {
    public DeclineInvitationsHeaders headers;
    public DeclineInvitationsRequest withHeaders(DeclineInvitationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeclineInvitationsRequestBody request;
    public DeclineInvitationsRequest withRequest(DeclineInvitationsRequestBody request) {
        this.request = request;
        return this;
    }
}