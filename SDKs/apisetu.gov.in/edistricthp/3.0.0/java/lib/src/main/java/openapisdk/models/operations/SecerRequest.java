package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SecerRequestBody request;
    public SecerRequest withRequest(SecerRequestBody request) {
        this.request = request;
        return this;
    }
    public SecerSecurity security;
    public SecerRequest withSecurity(SecerSecurity security) {
        this.security = security;
        return this;
    }
}