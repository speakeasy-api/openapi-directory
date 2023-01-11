package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PepOrderRequest {
    public PepOrderPathParams pathParams;
    public PepOrderRequest withPathParams(PepOrderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public PepOrderRequestBody request;
    public PepOrderRequest withRequest(PepOrderRequestBody request) {
        this.request = request;
        return this;
    }
    public PepOrderSecurity security;
    public PepOrderRequest withSecurity(PepOrderSecurity security) {
        this.security = security;
        return this;
    }
}