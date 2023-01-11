package openapisdk.models.operations;



public class GetShippingFulfillmentsRequest {
    public GetShippingFulfillmentsPathParams pathParams;
    public GetShippingFulfillmentsRequest withPathParams(GetShippingFulfillmentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetShippingFulfillmentsSecurity security;
    public GetShippingFulfillmentsRequest withSecurity(GetShippingFulfillmentsSecurity security) {
        this.security = security;
        return this;
    }
}