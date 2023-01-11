package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SmcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SmcerRequestBody request;
    public SmcerRequest withRequest(SmcerRequestBody request) {
        this.request = request;
        return this;
    }
    public SmcerSecurity security;
    public SmcerRequest withSecurity(SmcerSecurity security) {
        this.security = security;
        return this;
    }
}