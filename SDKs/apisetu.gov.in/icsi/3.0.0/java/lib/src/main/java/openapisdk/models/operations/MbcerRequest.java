package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MbcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MbcerRequestBody request;
    public MbcerRequest withRequest(MbcerRequestBody request) {
        this.request = request;
        return this;
    }
    public MbcerSecurity security;
    public MbcerRequest withSecurity(MbcerSecurity security) {
        this.security = security;
        return this;
    }
}