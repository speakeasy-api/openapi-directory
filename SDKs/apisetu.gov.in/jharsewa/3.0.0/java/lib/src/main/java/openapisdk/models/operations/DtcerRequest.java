package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DtcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DtcerRequestBody request;
    public DtcerRequest withRequest(DtcerRequestBody request) {
        this.request = request;
        return this;
    }
    public DtcerSecurity security;
    public DtcerRequest withSecurity(DtcerSecurity security) {
        this.security = security;
        return this;
    }
}