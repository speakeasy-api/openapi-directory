package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTokenRequest {
    public CreateTokenHeaders headers;
    public CreateTokenRequest withHeaders(CreateTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTokenRequest request;
    public CreateTokenRequest withRequest(openapisdk.models.shared.CreateTokenRequest request) {
        this.request = request;
        return this;
    }
}