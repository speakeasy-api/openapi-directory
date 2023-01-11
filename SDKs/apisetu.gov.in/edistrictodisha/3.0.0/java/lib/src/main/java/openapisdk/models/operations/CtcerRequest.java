package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CtcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CtcerRequestBody request;
    public CtcerRequest withRequest(CtcerRequestBody request) {
        this.request = request;
        return this;
    }
    public CtcerSecurity security;
    public CtcerRequest withSecurity(CtcerSecurity security) {
        this.security = security;
        return this;
    }
}