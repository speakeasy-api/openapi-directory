package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EscerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EscerRequestBody request;
    public EscerRequest withRequest(EscerRequestBody request) {
        this.request = request;
        return this;
    }
    public EscerSecurity security;
    public EscerRequest withSecurity(EscerSecurity security) {
        this.security = security;
        return this;
    }
}