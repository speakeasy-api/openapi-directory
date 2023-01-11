package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagStreamRequest {
    public TagStreamHeaders headers;
    public TagStreamRequest withHeaders(TagStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TagStreamRequestBody request;
    public TagStreamRequest withRequest(TagStreamRequestBody request) {
        this.request = request;
        return this;
    }
}