package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyUserAttributeRequest {
    public VerifyUserAttributeHeaders headers;
    public VerifyUserAttributeRequest withHeaders(VerifyUserAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VerifyUserAttributeRequest request;
    public VerifyUserAttributeRequest withRequest(openapisdk.models.shared.VerifyUserAttributeRequest request) {
        this.request = request;
        return this;
    }
}