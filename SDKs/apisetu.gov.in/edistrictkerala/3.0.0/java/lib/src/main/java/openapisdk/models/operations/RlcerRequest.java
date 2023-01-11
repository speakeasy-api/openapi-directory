package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RlcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RlcerRequestBody request;
    public RlcerRequest withRequest(RlcerRequestBody request) {
        this.request = request;
        return this;
    }
    public RlcerSecurity security;
    public RlcerRequest withSecurity(RlcerSecurity security) {
        this.security = security;
        return this;
    }
}