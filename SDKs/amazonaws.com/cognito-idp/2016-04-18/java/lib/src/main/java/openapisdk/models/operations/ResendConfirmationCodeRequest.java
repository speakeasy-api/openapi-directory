package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResendConfirmationCodeRequest {
    public ResendConfirmationCodeHeaders headers;
    public ResendConfirmationCodeRequest withHeaders(ResendConfirmationCodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResendConfirmationCodeRequest request;
    public ResendConfirmationCodeRequest withRequest(openapisdk.models.shared.ResendConfirmationCodeRequest request) {
        this.request = request;
        return this;
    }
}