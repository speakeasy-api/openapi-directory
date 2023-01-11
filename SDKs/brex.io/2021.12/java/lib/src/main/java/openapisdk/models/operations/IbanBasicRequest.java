package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IbanBasicRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public IbanBasicRequestBody request;
    public IbanBasicRequest withRequest(IbanBasicRequestBody request) {
        this.request = request;
        return this;
    }
    public IbanBasicSecurity security;
    public IbanBasicRequest withSecurity(IbanBasicSecurity security) {
        this.security = security;
        return this;
    }
}