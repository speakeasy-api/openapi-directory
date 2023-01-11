package openapisdk.models.operations;



public class GetSalesTaxRequest {
    public GetSalesTaxPathParams pathParams;
    public GetSalesTaxRequest withPathParams(GetSalesTaxPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSalesTaxSecurity security;
    public GetSalesTaxRequest withSecurity(GetSalesTaxSecurity security) {
        this.security = security;
        return this;
    }
}