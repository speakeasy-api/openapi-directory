package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DelcsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DelcsRequestBody request;
    public DelcsRequest withRequest(DelcsRequestBody request) {
        this.request = request;
        return this;
    }
    public DelcsSecurity security;
    public DelcsRequest withSecurity(DelcsSecurity security) {
        this.security = security;
        return this;
    }
}