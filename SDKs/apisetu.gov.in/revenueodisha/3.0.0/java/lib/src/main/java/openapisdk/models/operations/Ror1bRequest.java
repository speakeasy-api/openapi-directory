package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Ror1bRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Ror1bRequestBody request;
    public Ror1bRequest withRequest(Ror1bRequestBody request) {
        this.request = request;
        return this;
    }
    public Ror1bSecurity security;
    public Ror1bRequest withSecurity(Ror1bSecurity security) {
        this.security = security;
        return this;
    }
}