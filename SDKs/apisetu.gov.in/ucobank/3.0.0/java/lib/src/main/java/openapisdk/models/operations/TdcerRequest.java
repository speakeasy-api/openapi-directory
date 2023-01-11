package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TdcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TdcerRequestBody request;
    public TdcerRequest withRequest(TdcerRequestBody request) {
        this.request = request;
        return this;
    }
    public TdcerSecurity security;
    public TdcerRequest withSecurity(TdcerSecurity security) {
        this.security = security;
        return this;
    }
}