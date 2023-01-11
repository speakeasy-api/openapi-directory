package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhoneNumberValidateRequest {
    public PhoneNumberValidateHeaders headers;
    public PhoneNumberValidateRequest withHeaders(PhoneNumberValidateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PhoneNumberValidateRequestBody request;
    public PhoneNumberValidateRequest withRequest(PhoneNumberValidateRequestBody request) {
        this.request = request;
        return this;
    }
}