package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IdcerRequestBody request;
    public IdcerRequest withRequest(IdcerRequestBody request) {
        this.request = request;
        return this;
    }
    public IdcerSecurity security;
    public IdcerRequest withSecurity(IdcerSecurity security) {
        this.security = security;
        return this;
    }
}