package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupRequest {
    public CreateGroupHeaders headers;
    public CreateGroupRequest withHeaders(CreateGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateGroupRequest request;
    public CreateGroupRequest withRequest(openapisdk.models.shared.CreateGroupRequest request) {
        this.request = request;
        return this;
    }
}