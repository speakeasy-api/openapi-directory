package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterAccountRequest {
    public RegisterAccountHeaders headers;
    public RegisterAccountRequest withHeaders(RegisterAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RegisterAccountRequestBody request;
    public RegisterAccountRequest withRequest(RegisterAccountRequestBody request) {
        this.request = request;
        return this;
    }
}