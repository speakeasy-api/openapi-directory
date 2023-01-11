package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignUpRequest {
    public SignUpHeaders headers;
    public SignUpRequest withHeaders(SignUpHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SignUpRequest request;
    public SignUpRequest withRequest(openapisdk.models.shared.SignUpRequest request) {
        this.request = request;
        return this;
    }
}