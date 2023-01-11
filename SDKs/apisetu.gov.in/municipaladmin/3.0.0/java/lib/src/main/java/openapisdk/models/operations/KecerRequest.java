package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KecerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public KecerRequestBody request;
    public KecerRequest withRequest(KecerRequestBody request) {
        this.request = request;
        return this;
    }
    public KecerSecurity security;
    public KecerRequest withSecurity(KecerSecurity security) {
        this.security = security;
        return this;
    }
}