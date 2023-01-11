package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AecmwRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AecmwRequestBody request;
    public AecmwRequest withRequest(AecmwRequestBody request) {
        this.request = request;
        return this;
    }
    public AecmwSecurity security;
    public AecmwRequest withSecurity(AecmwSecurity security) {
        this.security = security;
        return this;
    }
}