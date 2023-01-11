package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PvcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PvcerRequestBody request;
    public PvcerRequest withRequest(PvcerRequestBody request) {
        this.request = request;
        return this;
    }
    public PvcerSecurity security;
    public PvcerRequest withSecurity(PvcerSecurity security) {
        this.security = security;
        return this;
    }
}