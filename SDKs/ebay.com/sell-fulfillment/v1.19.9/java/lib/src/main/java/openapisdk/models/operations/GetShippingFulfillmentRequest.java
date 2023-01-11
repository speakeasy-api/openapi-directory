package openapisdk.models.operations;



public class GetShippingFulfillmentRequest {
    public GetShippingFulfillmentPathParams pathParams;
    public GetShippingFulfillmentRequest withPathParams(GetShippingFulfillmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetShippingFulfillmentSecurity security;
    public GetShippingFulfillmentRequest withSecurity(GetShippingFulfillmentSecurity security) {
        this.security = security;
        return this;
    }
}