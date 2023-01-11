package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPaymentInstrumentsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostPaymentInstrumentsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostPaymentInstrumentsSecurity security;
    public PostPaymentInstrumentsRequest withSecurity(PostPaymentInstrumentsSecurity security) {
        this.security = security;
        return this;
    }
}