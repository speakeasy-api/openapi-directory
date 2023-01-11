package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMembersRequest {
    public CreateMembersHeaders headers;
    public CreateMembersRequest withHeaders(CreateMembersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateMembersRequestBody request;
    public CreateMembersRequest withRequest(CreateMembersRequestBody request) {
        this.request = request;
        return this;
    }
}