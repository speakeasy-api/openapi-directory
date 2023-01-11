package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPaymentInstrumentsIdRequest {
    public PatchPaymentInstrumentsIdPathParams pathParams;
    public PatchPaymentInstrumentsIdRequest withPathParams(PatchPaymentInstrumentsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PatchPaymentInstrumentsIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PatchPaymentInstrumentsIdSecurity security;
    public PatchPaymentInstrumentsIdRequest withSecurity(PatchPaymentInstrumentsIdSecurity security) {
        this.security = security;
        return this;
    }
}