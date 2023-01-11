package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SkhscRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SkhscRequestBody request;
    public SkhscRequest withRequest(SkhscRequestBody request) {
        this.request = request;
        return this;
    }
    public SkhscSecurity security;
    public SkhscRequest withSecurity(SkhscSecurity security) {
        this.security = security;
        return this;
    }
}