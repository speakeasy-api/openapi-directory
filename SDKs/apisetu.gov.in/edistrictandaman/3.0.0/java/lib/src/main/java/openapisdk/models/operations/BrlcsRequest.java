package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BrlcsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BrlcsRequestBody request;
    public BrlcsRequest withRequest(BrlcsRequestBody request) {
        this.request = request;
        return this;
    }
    public BrlcsSecurity security;
    public BrlcsRequest withSecurity(BrlcsSecurity security) {
        this.security = security;
        return this;
    }
}