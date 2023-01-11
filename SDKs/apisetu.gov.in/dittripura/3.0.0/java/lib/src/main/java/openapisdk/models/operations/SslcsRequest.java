package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SslcsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SslcsRequestBody request;
    public SslcsRequest withRequest(SslcsRequestBody request) {
        this.request = request;
        return this;
    }
    public SslcsSecurity security;
    public SslcsRequest withSecurity(SslcsSecurity security) {
        this.security = security;
        return this;
    }
}