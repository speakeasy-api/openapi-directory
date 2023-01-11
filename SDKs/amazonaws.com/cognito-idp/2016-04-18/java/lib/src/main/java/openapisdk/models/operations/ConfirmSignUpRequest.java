package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmSignUpRequest {
    public ConfirmSignUpHeaders headers;
    public ConfirmSignUpRequest withHeaders(ConfirmSignUpHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfirmSignUpRequest request;
    public ConfirmSignUpRequest withRequest(openapisdk.models.shared.ConfirmSignUpRequest request) {
        this.request = request;
        return this;
    }
}