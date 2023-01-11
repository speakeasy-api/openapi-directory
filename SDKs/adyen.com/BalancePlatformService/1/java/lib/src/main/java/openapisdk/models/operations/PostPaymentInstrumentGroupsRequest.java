package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPaymentInstrumentGroupsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostPaymentInstrumentGroupsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostPaymentInstrumentGroupsSecurity security;
    public PostPaymentInstrumentGroupsRequest withSecurity(PostPaymentInstrumentGroupsSecurity security) {
        this.security = security;
        return this;
    }
}