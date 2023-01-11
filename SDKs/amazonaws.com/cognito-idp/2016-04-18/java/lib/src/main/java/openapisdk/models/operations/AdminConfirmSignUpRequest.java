package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminConfirmSignUpRequest {
    public AdminConfirmSignUpHeaders headers;
    public AdminConfirmSignUpRequest withHeaders(AdminConfirmSignUpHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminConfirmSignUpRequest request;
    public AdminConfirmSignUpRequest withRequest(openapisdk.models.shared.AdminConfirmSignUpRequest request) {
        this.request = request;
        return this;
    }
}