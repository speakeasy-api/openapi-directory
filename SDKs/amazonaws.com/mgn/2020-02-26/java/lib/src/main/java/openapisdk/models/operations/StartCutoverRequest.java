package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartCutoverRequest {
    public StartCutoverHeaders headers;
    public StartCutoverRequest withHeaders(StartCutoverHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartCutoverRequestBody request;
    public StartCutoverRequest withRequest(StartCutoverRequestBody request) {
        this.request = request;
        return this;
    }
}