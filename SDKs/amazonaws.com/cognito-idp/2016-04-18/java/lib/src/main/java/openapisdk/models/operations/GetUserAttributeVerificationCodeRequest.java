package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserAttributeVerificationCodeRequest {
    public GetUserAttributeVerificationCodeHeaders headers;
    public GetUserAttributeVerificationCodeRequest withHeaders(GetUserAttributeVerificationCodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetUserAttributeVerificationCodeRequest request;
    public GetUserAttributeVerificationCodeRequest withRequest(openapisdk.models.shared.GetUserAttributeVerificationCodeRequest request) {
        this.request = request;
        return this;
    }
}