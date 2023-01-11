package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BpcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BpcerRequestBody request;
    public BpcerRequest withRequest(BpcerRequestBody request) {
        this.request = request;
        return this;
    }
    public BpcerSecurity security;
    public BpcerRequest withSecurity(BpcerSecurity security) {
        this.security = security;
        return this;
    }
}