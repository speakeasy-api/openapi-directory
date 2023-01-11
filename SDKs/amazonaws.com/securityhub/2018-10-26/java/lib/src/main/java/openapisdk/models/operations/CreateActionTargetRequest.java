package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateActionTargetRequest {
    public CreateActionTargetHeaders headers;
    public CreateActionTargetRequest withHeaders(CreateActionTargetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateActionTargetRequestBody request;
    public CreateActionTargetRequest withRequest(CreateActionTargetRequestBody request) {
        this.request = request;
        return this;
    }
}