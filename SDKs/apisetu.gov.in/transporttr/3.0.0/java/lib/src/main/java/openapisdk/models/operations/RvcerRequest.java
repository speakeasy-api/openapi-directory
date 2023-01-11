package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RvcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RvcerRequestBody request;
    public RvcerRequest withRequest(RvcerRequestBody request) {
        this.request = request;
        return this;
    }
    public RvcerSecurity security;
    public RvcerRequest withSecurity(RvcerSecurity security) {
        this.security = security;
        return this;
    }
}