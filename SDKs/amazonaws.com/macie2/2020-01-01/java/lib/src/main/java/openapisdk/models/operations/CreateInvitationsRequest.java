package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInvitationsRequest {
    public CreateInvitationsHeaders headers;
    public CreateInvitationsRequest withHeaders(CreateInvitationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateInvitationsRequestBody request;
    public CreateInvitationsRequest withRequest(CreateInvitationsRequestBody request) {
        this.request = request;
        return this;
    }
}