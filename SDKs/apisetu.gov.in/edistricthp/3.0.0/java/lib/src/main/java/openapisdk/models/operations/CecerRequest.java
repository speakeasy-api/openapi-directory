package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CecerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CecerRequestBody request;
    public CecerRequest withRequest(CecerRequestBody request) {
        this.request = request;
        return this;
    }
    public CecerSecurity security;
    public CecerRequest withSecurity(CecerSecurity security) {
        this.security = security;
        return this;
    }
}