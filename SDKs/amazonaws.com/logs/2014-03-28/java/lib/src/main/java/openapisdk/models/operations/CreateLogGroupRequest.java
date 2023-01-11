package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLogGroupRequest {
    public CreateLogGroupHeaders headers;
    public CreateLogGroupRequest withHeaders(CreateLogGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLogGroupRequest request;
    public CreateLogGroupRequest withRequest(openapisdk.models.shared.CreateLogGroupRequest request) {
        this.request = request;
        return this;
    }
}