package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SkmstRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SkmstRequestBody request;
    public SkmstRequest withRequest(SkmstRequestBody request) {
        this.request = request;
        return this;
    }
    public SkmstSecurity security;
    public SkmstRequest withSecurity(SkmstSecurity security) {
        this.security = security;
        return this;
    }
}