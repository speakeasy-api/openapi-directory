package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PscerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PscerRequestBody request;
    public PscerRequest withRequest(PscerRequestBody request) {
        this.request = request;
        return this;
    }
    public PscerSecurity security;
    public PscerRequest withSecurity(PscerSecurity security) {
        this.security = security;
        return this;
    }
}