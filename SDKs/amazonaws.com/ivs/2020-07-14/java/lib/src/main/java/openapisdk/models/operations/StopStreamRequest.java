package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopStreamRequest {
    public StopStreamHeaders headers;
    public StopStreamRequest withHeaders(StopStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StopStreamRequestBody request;
    public StopStreamRequest withRequest(StopStreamRequestBody request) {
        this.request = request;
        return this;
    }
}