package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrcptRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PrcptRequestBody request;
    public PrcptRequest withRequest(PrcptRequestBody request) {
        this.request = request;
        return this;
    }
    public PrcptSecurity security;
    public PrcptRequest withSecurity(PrcptSecurity security) {
        this.security = security;
        return this;
    }
}