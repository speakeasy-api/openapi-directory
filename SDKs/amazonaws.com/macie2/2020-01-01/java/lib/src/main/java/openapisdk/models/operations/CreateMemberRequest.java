package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMemberRequest {
    public CreateMemberHeaders headers;
    public CreateMemberRequest withHeaders(CreateMemberHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateMemberRequestBody request;
    public CreateMemberRequest withRequest(CreateMemberRequestBody request) {
        this.request = request;
        return this;
    }
}