package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OtcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OtcerRequestBody request;
    public OtcerRequest withRequest(OtcerRequestBody request) {
        this.request = request;
        return this;
    }
    public OtcerSecurity security;
    public OtcerRequest withSecurity(OtcerSecurity security) {
        this.security = security;
        return this;
    }
}