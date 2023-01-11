package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagStreamRequest {
    public UntagStreamHeaders headers;
    public UntagStreamRequest withHeaders(UntagStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UntagStreamRequestBody request;
    public UntagStreamRequest withRequest(UntagStreamRequestBody request) {
        this.request = request;
        return this;
    }
}