package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ForgotPasswordRequest {
    public ForgotPasswordHeaders headers;
    public ForgotPasswordRequest withHeaders(ForgotPasswordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ForgotPasswordRequest request;
    public ForgotPasswordRequest withRequest(openapisdk.models.shared.ForgotPasswordRequest request) {
        this.request = request;
        return this;
    }
}