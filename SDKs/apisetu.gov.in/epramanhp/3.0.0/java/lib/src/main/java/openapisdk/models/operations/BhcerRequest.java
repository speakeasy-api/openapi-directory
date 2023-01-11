package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BhcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BhcerRequestBody request;
    public BhcerRequest withRequest(BhcerRequestBody request) {
        this.request = request;
        return this;
    }
    public BhcerSecurity security;
    public BhcerRequest withSecurity(BhcerSecurity security) {
        this.security = security;
        return this;
    }
}