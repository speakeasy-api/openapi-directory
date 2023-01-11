package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGraphRequest {
    public CreateGraphHeaders headers;
    public CreateGraphRequest withHeaders(CreateGraphHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateGraphRequestBody request;
    public CreateGraphRequest withRequest(CreateGraphRequestBody request) {
        this.request = request;
        return this;
    }
}