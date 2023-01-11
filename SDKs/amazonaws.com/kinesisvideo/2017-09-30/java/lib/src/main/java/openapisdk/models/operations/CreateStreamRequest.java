package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamRequest {
    public CreateStreamHeaders headers;
    public CreateStreamRequest withHeaders(CreateStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateStreamRequestBody request;
    public CreateStreamRequest withRequest(CreateStreamRequestBody request) {
        this.request = request;
        return this;
    }
}