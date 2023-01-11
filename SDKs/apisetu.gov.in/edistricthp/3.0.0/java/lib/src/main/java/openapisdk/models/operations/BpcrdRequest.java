package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BpcrdRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BpcrdRequestBody request;
    public BpcrdRequest withRequest(BpcrdRequestBody request) {
        this.request = request;
        return this;
    }
    public BpcrdSecurity security;
    public BpcrdRequest withSecurity(BpcrdSecurity security) {
        this.security = security;
        return this;
    }
}