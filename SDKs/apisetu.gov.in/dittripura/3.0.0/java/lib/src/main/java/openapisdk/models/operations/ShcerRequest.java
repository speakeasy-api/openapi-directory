package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ShcerRequestBody request;
    public ShcerRequest withRequest(ShcerRequestBody request) {
        this.request = request;
        return this;
    }
    public ShcerSecurity security;
    public ShcerRequest withSecurity(ShcerSecurity security) {
        this.security = security;
        return this;
    }
}