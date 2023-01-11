package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SpcerRequestBody request;
    public SpcerRequest withRequest(SpcerRequestBody request) {
        this.request = request;
        return this;
    }
    public SpcerSecurity security;
    public SpcerRequest withSecurity(SpcerSecurity security) {
        this.security = security;
        return this;
    }
}