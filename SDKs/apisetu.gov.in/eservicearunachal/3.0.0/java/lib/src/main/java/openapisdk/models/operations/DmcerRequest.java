package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DmcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DmcerRequestBody request;
    public DmcerRequest withRequest(DmcerRequestBody request) {
        this.request = request;
        return this;
    }
    public DmcerSecurity security;
    public DmcerRequest withSecurity(DmcerSecurity security) {
        this.security = security;
        return this;
    }
}