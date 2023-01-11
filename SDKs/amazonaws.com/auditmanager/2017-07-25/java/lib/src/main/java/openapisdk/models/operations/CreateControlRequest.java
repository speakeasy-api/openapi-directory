package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateControlRequest {
    public CreateControlHeaders headers;
    public CreateControlRequest withHeaders(CreateControlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateControlRequestBody request;
    public CreateControlRequest withRequest(CreateControlRequestBody request) {
        this.request = request;
        return this;
    }
}