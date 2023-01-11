package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ImcerRequestBody request;
    public ImcerRequest withRequest(ImcerRequestBody request) {
        this.request = request;
        return this;
    }
    public ImcerSecurity security;
    public ImcerRequest withSecurity(ImcerSecurity security) {
        this.security = security;
        return this;
    }
}