package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SscerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SscerRequestBody request;
    public SscerRequest withRequest(SscerRequestBody request) {
        this.request = request;
        return this;
    }
    public SscerSecurity security;
    public SscerRequest withSecurity(SscerSecurity security) {
        this.security = security;
        return this;
    }
}