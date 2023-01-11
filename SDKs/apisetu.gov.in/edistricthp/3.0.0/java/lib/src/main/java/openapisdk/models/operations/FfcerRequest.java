package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FfcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public FfcerRequestBody request;
    public FfcerRequest withRequest(FfcerRequestBody request) {
        this.request = request;
        return this;
    }
    public FfcerSecurity security;
    public FfcerRequest withSecurity(FfcerSecurity security) {
        this.security = security;
        return this;
    }
}