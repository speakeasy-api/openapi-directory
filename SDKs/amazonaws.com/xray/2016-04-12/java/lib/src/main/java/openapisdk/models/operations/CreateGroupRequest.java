package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupRequest {
    public CreateGroupHeaders headers;
    public CreateGroupRequest withHeaders(CreateGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateGroupRequestBody request;
    public CreateGroupRequest withRequest(CreateGroupRequestBody request) {
        this.request = request;
        return this;
    }
}