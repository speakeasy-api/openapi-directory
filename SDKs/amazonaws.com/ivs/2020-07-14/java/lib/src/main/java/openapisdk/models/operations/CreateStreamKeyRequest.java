package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamKeyRequest {
    public CreateStreamKeyHeaders headers;
    public CreateStreamKeyRequest withHeaders(CreateStreamKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateStreamKeyRequestBody request;
    public CreateStreamKeyRequest withRequest(CreateStreamKeyRequestBody request) {
        this.request = request;
        return this;
    }
}