package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SktscRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SktscRequestBody request;
    public SktscRequest withRequest(SktscRequestBody request) {
        this.request = request;
        return this;
    }
    public SktscSecurity security;
    public SktscRequest withSecurity(SktscSecurity security) {
        this.security = security;
        return this;
    }
}