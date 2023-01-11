package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartTestRequest {
    public StartTestHeaders headers;
    public StartTestRequest withHeaders(StartTestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartTestRequestBody request;
    public StartTestRequest withRequest(StartTestRequestBody request) {
        this.request = request;
        return this;
    }
}