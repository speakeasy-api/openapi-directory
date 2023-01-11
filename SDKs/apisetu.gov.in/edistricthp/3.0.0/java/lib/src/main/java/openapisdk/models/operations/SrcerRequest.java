package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SrcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SrcerRequestBody request;
    public SrcerRequest withRequest(SrcerRequestBody request) {
        this.request = request;
        return this;
    }
    public SrcerSecurity security;
    public SrcerRequest withSecurity(SrcerSecurity security) {
        this.security = security;
        return this;
    }
}