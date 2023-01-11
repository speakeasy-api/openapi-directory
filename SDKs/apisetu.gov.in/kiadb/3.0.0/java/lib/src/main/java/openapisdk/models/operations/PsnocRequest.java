package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PsnocRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PsnocRequestBody request;
    public PsnocRequest withRequest(PsnocRequestBody request) {
        this.request = request;
        return this;
    }
    public PsnocSecurity security;
    public PsnocRequest withSecurity(PsnocSecurity security) {
        this.security = security;
        return this;
    }
}