package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmForgotPasswordRequest {
    public ConfirmForgotPasswordHeaders headers;
    public ConfirmForgotPasswordRequest withHeaders(ConfirmForgotPasswordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfirmForgotPasswordRequest request;
    public ConfirmForgotPasswordRequest withRequest(openapisdk.models.shared.ConfirmForgotPasswordRequest request) {
        this.request = request;
        return this;
    }
}