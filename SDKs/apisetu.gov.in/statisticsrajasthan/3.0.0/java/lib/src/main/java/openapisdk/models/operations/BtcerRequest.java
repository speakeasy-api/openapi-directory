package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BtcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BtcerRequestBody request;
    public BtcerRequest withRequest(BtcerRequestBody request) {
        this.request = request;
        return this;
    }
    public BtcerSecurity security;
    public BtcerRequest withSecurity(BtcerSecurity security) {
        this.security = security;
        return this;
    }
}