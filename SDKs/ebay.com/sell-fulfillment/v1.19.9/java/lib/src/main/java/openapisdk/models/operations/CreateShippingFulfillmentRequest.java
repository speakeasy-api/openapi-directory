package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateShippingFulfillmentRequest {
    public CreateShippingFulfillmentPathParams pathParams;
    public CreateShippingFulfillmentRequest withPathParams(CreateShippingFulfillmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ShippingFulfillmentDetails request;
    public CreateShippingFulfillmentRequest withRequest(openapisdk.models.shared.ShippingFulfillmentDetails request) {
        this.request = request;
        return this;
    }
    public CreateShippingFulfillmentSecurity security;
    public CreateShippingFulfillmentRequest withSecurity(CreateShippingFulfillmentSecurity security) {
        this.security = security;
        return this;
    }
}