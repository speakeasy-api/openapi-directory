package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStreamRequest {
    public DeleteStreamHeaders headers;
    public DeleteStreamRequest withHeaders(DeleteStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteStreamRequestBody request;
    public DeleteStreamRequest withRequest(DeleteStreamRequestBody request) {
        this.request = request;
        return this;
    }
}