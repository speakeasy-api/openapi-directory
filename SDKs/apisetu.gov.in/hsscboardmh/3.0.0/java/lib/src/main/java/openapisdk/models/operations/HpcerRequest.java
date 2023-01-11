package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HpcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public HpcerRequestBody request;
    public HpcerRequest withRequest(HpcerRequestBody request) {
        this.request = request;
        return this;
    }
    public HpcerSecurity security;
    public HpcerRequest withSecurity(HpcerSecurity security) {
        this.security = security;
        return this;
    }
}