package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PmjayRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PmjayRequestBody request;
    public PmjayRequest withRequest(PmjayRequestBody request) {
        this.request = request;
        return this;
    }
    public PmjaySecurity security;
    public PmjayRequest withSecurity(PmjaySecurity security) {
        this.security = security;
        return this;
    }
}