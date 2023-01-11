package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CocerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CocerRequestBody request;
    public CocerRequest withRequest(CocerRequestBody request) {
        this.request = request;
        return this;
    }
    public CocerSecurity security;
    public CocerRequest withSecurity(CocerSecurity security) {
        this.security = security;
        return this;
    }
}