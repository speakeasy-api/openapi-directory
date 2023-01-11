package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStreamKeyRequest {
    public DeleteStreamKeyHeaders headers;
    public DeleteStreamKeyRequest withHeaders(DeleteStreamKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteStreamKeyRequestBody request;
    public DeleteStreamKeyRequest withRequest(DeleteStreamKeyRequestBody request) {
        this.request = request;
        return this;
    }
}