package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SslcrRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SslcrRequestBody request;
    public SslcrRequest withRequest(SslcrRequestBody request) {
        this.request = request;
        return this;
    }
    public SslcrSecurity security;
    public SslcrRequest withSecurity(SslcrSecurity security) {
        this.security = security;
        return this;
    }
}