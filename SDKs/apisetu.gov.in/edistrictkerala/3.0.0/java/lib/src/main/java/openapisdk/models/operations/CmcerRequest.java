package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CmcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CmcerRequestBody request;
    public CmcerRequest withRequest(CmcerRequestBody request) {
        this.request = request;
        return this;
    }
    public CmcerSecurity security;
    public CmcerRequest withSecurity(CmcerSecurity security) {
        this.security = security;
        return this;
    }
}