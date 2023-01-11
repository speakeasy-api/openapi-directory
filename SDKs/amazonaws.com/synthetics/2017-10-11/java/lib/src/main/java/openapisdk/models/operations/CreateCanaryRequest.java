package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCanaryRequest {
    public CreateCanaryHeaders headers;
    public CreateCanaryRequest withHeaders(CreateCanaryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCanaryRequestBody request;
    public CreateCanaryRequest withRequest(CreateCanaryRequestBody request) {
        this.request = request;
        return this;
    }
}