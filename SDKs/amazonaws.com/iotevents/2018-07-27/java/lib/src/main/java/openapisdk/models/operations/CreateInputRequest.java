package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInputRequest {
    public CreateInputHeaders headers;
    public CreateInputRequest withHeaders(CreateInputHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateInputRequestBody request;
    public CreateInputRequest withRequest(CreateInputRequestBody request) {
        this.request = request;
        return this;
    }
}