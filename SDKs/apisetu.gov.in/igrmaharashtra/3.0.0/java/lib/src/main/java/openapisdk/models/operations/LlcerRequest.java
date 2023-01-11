package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LlcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LlcerRequestBody request;
    public LlcerRequest withRequest(LlcerRequestBody request) {
        this.request = request;
        return this;
    }
    public LlcerSecurity security;
    public LlcerRequest withSecurity(LlcerSecurity security) {
        this.security = security;
        return this;
    }
}