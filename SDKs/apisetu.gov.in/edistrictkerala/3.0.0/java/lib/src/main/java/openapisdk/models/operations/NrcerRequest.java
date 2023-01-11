package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NrcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NrcerRequestBody request;
    public NrcerRequest withRequest(NrcerRequestBody request) {
        this.request = request;
        return this;
    }
    public NrcerSecurity security;
    public NrcerRequest withSecurity(NrcerSecurity security) {
        this.security = security;
        return this;
    }
}