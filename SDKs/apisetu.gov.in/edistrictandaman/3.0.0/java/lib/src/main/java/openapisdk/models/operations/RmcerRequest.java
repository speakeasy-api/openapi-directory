package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RmcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RmcerRequestBody request;
    public RmcerRequest withRequest(RmcerRequestBody request) {
        this.request = request;
        return this;
    }
    public RmcerSecurity security;
    public RmcerRequest withSecurity(RmcerSecurity security) {
        this.security = security;
        return this;
    }
}