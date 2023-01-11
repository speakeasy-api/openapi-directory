package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CemstRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CemstRequestBody request;
    public CemstRequest withRequest(CemstRequestBody request) {
        this.request = request;
        return this;
    }
    public CemstSecurity security;
    public CemstRequest withSecurity(CemstSecurity security) {
        this.security = security;
        return this;
    }
}