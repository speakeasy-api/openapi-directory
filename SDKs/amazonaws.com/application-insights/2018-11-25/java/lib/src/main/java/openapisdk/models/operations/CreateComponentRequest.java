package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateComponentRequest {
    public CreateComponentHeaders headers;
    public CreateComponentRequest withHeaders(CreateComponentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateComponentRequest request;
    public CreateComponentRequest withRequest(openapisdk.models.shared.CreateComponentRequest request) {
        this.request = request;
        return this;
    }
}