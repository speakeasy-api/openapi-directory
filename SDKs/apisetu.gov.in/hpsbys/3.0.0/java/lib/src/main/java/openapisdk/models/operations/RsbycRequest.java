package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RsbycRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RsbycRequestBody request;
    public RsbycRequest withRequest(RsbycRequestBody request) {
        this.request = request;
        return this;
    }
    public RsbycSecurity security;
    public RsbycRequest withSecurity(RsbycSecurity security) {
        this.security = security;
        return this;
    }
}