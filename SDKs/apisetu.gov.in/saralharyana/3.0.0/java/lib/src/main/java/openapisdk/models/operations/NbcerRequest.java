package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NbcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NbcerRequestBody request;
    public NbcerRequest withRequest(NbcerRequestBody request) {
        this.request = request;
        return this;
    }
    public NbcerSecurity security;
    public NbcerRequest withSecurity(NbcerSecurity security) {
        this.security = security;
        return this;
    }
}