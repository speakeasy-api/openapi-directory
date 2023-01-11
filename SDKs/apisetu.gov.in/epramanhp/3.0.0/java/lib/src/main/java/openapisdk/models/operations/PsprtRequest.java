package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PsprtRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PsprtRequestBody request;
    public PsprtRequest withRequest(PsprtRequestBody request) {
        this.request = request;
        return this;
    }
    public PsprtSecurity security;
    public PsprtRequest withSecurity(PsprtSecurity security) {
        this.security = security;
        return this;
    }
}