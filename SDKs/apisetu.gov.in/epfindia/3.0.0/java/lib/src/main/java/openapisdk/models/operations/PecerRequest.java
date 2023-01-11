package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PecerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PecerRequestBody request;
    public PecerRequest withRequest(PecerRequestBody request) {
        this.request = request;
        return this;
    }
    public PecerSecurity security;
    public PecerRequest withSecurity(PecerSecurity security) {
        this.security = security;
        return this;
    }
}