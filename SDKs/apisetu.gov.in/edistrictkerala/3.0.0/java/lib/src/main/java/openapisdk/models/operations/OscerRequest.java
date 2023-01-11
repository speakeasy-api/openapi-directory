package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OscerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OscerRequestBody request;
    public OscerRequest withRequest(OscerRequestBody request) {
        this.request = request;
        return this;
    }
    public OscerSecurity security;
    public OscerRequest withSecurity(OscerSecurity security) {
        this.security = security;
        return this;
    }
}