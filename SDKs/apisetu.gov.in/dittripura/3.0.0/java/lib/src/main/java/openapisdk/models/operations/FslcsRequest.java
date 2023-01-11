package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FslcsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public FslcsRequestBody request;
    public FslcsRequest withRequest(FslcsRequestBody request) {
        this.request = request;
        return this;
    }
    public FslcsSecurity security;
    public FslcsRequest withSecurity(FslcsSecurity security) {
        this.security = security;
        return this;
    }
}