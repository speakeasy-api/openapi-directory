package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IgcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IgcerRequestBody request;
    public IgcerRequest withRequest(IgcerRequestBody request) {
        this.request = request;
        return this;
    }
    public IgcerSecurity security;
    public IgcerRequest withSecurity(IgcerSecurity security) {
        this.security = security;
        return this;
    }
}