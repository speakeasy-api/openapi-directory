package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NdcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NdcerRequestBody request;
    public NdcerRequest withRequest(NdcerRequestBody request) {
        this.request = request;
        return this;
    }
    public NdcerSecurity security;
    public NdcerRequest withSecurity(NdcerSecurity security) {
        this.security = security;
        return this;
    }
}