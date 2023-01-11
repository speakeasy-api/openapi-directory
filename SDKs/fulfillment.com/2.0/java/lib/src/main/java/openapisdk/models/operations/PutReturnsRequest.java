package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutReturnsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutReturnsRmaRequestV2 request;
    public PutReturnsRequest withRequest(PutReturnsRmaRequestV2 request) {
        this.request = request;
        return this;
    }
    public PutReturnsSecurity security;
    public PutReturnsRequest withSecurity(PutReturnsSecurity security) {
        this.security = security;
        return this;
    }
}