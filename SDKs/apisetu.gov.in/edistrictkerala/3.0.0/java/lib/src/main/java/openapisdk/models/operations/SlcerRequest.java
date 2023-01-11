package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SlcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SlcerRequestBody request;
    public SlcerRequest withRequest(SlcerRequestBody request) {
        this.request = request;
        return this;
    }
    public SlcerSecurity security;
    public SlcerRequest withSecurity(SlcerSecurity security) {
        this.security = security;
        return this;
    }
}