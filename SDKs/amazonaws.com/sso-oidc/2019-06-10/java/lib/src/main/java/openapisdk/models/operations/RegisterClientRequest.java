package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterClientRequest {
    public RegisterClientHeaders headers;
    public RegisterClientRequest withHeaders(RegisterClientHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RegisterClientRequestBody request;
    public RegisterClientRequest withRequest(RegisterClientRequestBody request) {
        this.request = request;
        return this;
    }
}