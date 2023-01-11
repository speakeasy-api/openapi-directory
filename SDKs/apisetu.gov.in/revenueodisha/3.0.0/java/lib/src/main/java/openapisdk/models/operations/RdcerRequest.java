package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RdcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RdcerRequestBody request;
    public RdcerRequest withRequest(RdcerRequestBody request) {
        this.request = request;
        return this;
    }
    public RdcerSecurity security;
    public RdcerRequest withSecurity(RdcerSecurity security) {
        this.security = security;
        return this;
    }
}