package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SvcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SvcerRequestBody request;
    public SvcerRequest withRequest(SvcerRequestBody request) {
        this.request = request;
        return this;
    }
    public SvcerSecurity security;
    public SvcerRequest withSecurity(SvcerSecurity security) {
        this.security = security;
        return this;
    }
}