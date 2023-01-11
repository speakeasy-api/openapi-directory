package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TrcerRequestBody request;
    public TrcerRequest withRequest(TrcerRequestBody request) {
        this.request = request;
        return this;
    }
    public TrcerSecurity security;
    public TrcerRequest withSecurity(TrcerSecurity security) {
        this.security = security;
        return this;
    }
}