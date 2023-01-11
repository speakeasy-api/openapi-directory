package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EgcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EgcerRequestBody request;
    public EgcerRequest withRequest(EgcerRequestBody request) {
        this.request = request;
        return this;
    }
    public EgcerSecurity security;
    public EgcerRequest withSecurity(EgcerSecurity security) {
        this.security = security;
        return this;
    }
}