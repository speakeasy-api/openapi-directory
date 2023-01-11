package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DgcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DgcerRequestBody request;
    public DgcerRequest withRequest(DgcerRequestBody request) {
        this.request = request;
        return this;
    }
    public DgcerSecurity security;
    public DgcerRequest withSecurity(DgcerSecurity security) {
        this.security = security;
        return this;
    }
}