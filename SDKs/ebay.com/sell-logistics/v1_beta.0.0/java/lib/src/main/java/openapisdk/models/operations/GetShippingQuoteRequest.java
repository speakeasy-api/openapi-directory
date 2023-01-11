package openapisdk.models.operations;



public class GetShippingQuoteRequest {
    public GetShippingQuotePathParams pathParams;
    public GetShippingQuoteRequest withPathParams(GetShippingQuotePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetShippingQuoteSecurity security;
    public GetShippingQuoteRequest withSecurity(GetShippingQuoteSecurity security) {
        this.security = security;
        return this;
    }
}