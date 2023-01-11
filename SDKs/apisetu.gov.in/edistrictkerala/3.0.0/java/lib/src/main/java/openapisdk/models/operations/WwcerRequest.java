package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WwcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public WwcerRequestBody request;
    public WwcerRequest withRequest(WwcerRequestBody request) {
        this.request = request;
        return this;
    }
    public WwcerSecurity security;
    public WwcerRequest withSecurity(WwcerSecurity security) {
        this.security = security;
        return this;
    }
}