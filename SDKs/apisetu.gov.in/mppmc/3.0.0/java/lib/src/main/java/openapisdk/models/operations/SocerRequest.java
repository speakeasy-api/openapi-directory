package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SocerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SocerRequestBody request;
    public SocerRequest withRequest(SocerRequestBody request) {
        this.request = request;
        return this;
    }
    public SocerSecurity security;
    public SocerRequest withSecurity(SocerSecurity security) {
        this.security = security;
        return this;
    }
}