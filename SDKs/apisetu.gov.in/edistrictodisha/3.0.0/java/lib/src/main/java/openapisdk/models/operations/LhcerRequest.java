package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LhcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LhcerRequestBody request;
    public LhcerRequest withRequest(LhcerRequestBody request) {
        this.request = request;
        return this;
    }
    public LhcerSecurity security;
    public LhcerRequest withSecurity(LhcerSecurity security) {
        this.security = security;
        return this;
    }
}