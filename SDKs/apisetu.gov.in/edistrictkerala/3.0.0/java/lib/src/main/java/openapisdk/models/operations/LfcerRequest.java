package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LfcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LfcerRequestBody request;
    public LfcerRequest withRequest(LfcerRequestBody request) {
        this.request = request;
        return this;
    }
    public LfcerSecurity security;
    public LfcerRequest withSecurity(LfcerSecurity security) {
        this.security = security;
        return this;
    }
}