package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChcerRequestBody request;
    public ChcerRequest withRequest(ChcerRequestBody request) {
        this.request = request;
        return this;
    }
    public ChcerSecurity security;
    public ChcerRequest withSecurity(ChcerSecurity security) {
        this.security = security;
        return this;
    }
}