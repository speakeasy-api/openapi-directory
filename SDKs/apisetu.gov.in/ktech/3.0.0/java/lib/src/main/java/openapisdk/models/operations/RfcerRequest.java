package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RfcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RfcerRequestBody request;
    public RfcerRequest withRequest(RfcerRequestBody request) {
        this.request = request;
        return this;
    }
    public RfcerSecurity security;
    public RfcerRequest withSecurity(RfcerSecurity security) {
        this.security = security;
        return this;
    }
}