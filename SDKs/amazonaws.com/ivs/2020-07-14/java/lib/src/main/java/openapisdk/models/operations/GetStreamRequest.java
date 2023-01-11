package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStreamRequest {
    public GetStreamHeaders headers;
    public GetStreamRequest withHeaders(GetStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetStreamRequestBody request;
    public GetStreamRequest withRequest(GetStreamRequestBody request) {
        this.request = request;
        return this;
    }
}