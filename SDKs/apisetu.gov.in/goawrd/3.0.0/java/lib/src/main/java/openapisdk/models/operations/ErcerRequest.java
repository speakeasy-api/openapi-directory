package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ErcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ErcerRequestBody request;
    public ErcerRequest withRequest(ErcerRequestBody request) {
        this.request = request;
        return this;
    }
    public ErcerSecurity security;
    public ErcerRequest withSecurity(ErcerSecurity security) {
        this.security = security;
        return this;
    }
}