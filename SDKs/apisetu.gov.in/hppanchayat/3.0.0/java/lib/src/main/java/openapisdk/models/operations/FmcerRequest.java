package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FmcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public FmcerRequestBody request;
    public FmcerRequest withRequest(FmcerRequestBody request) {
        this.request = request;
        return this;
    }
    public FmcerSecurity security;
    public FmcerRequest withSecurity(FmcerSecurity security) {
        this.security = security;
        return this;
    }
}