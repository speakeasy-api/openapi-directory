package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LocerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LocerRequestBody request;
    public LocerRequest withRequest(LocerRequestBody request) {
        this.request = request;
        return this;
    }
    public LocerSecurity security;
    public LocerRequest withSecurity(LocerSecurity security) {
        this.security = security;
        return this;
    }
}