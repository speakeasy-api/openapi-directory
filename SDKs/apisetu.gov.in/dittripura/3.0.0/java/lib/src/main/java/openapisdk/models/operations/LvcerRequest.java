package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LvcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LvcerRequestBody request;
    public LvcerRequest withRequest(LvcerRequestBody request) {
        this.request = request;
        return this;
    }
    public LvcerSecurity security;
    public LvcerRequest withSecurity(LvcerSecurity security) {
        this.security = security;
        return this;
    }
}