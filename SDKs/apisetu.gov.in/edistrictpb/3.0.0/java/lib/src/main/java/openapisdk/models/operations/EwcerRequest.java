package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EwcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EwcerRequestBody request;
    public EwcerRequest withRequest(EwcerRequestBody request) {
        this.request = request;
        return this;
    }
    public EwcerSecurity security;
    public EwcerRequest withSecurity(EwcerSecurity security) {
        this.security = security;
        return this;
    }
}