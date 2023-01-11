package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PhcerRequestBody request;
    public PhcerRequest withRequest(PhcerRequestBody request) {
        this.request = request;
        return this;
    }
    public PhcerSecurity security;
    public PhcerRequest withSecurity(PhcerSecurity security) {
        this.security = security;
        return this;
    }
}