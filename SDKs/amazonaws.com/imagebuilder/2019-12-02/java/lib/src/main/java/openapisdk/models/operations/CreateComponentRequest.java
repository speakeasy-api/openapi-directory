package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateComponentRequest {
    public CreateComponentHeaders headers;
    public CreateComponentRequest withHeaders(CreateComponentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateComponentRequestBody request;
    public CreateComponentRequest withRequest(CreateComponentRequestBody request) {
        this.request = request;
        return this;
    }
}