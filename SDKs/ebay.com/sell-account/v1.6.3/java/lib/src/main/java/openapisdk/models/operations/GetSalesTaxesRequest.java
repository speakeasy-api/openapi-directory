package openapisdk.models.operations;



public class GetSalesTaxesRequest {
    public GetSalesTaxesQueryParams queryParams;
    public GetSalesTaxesRequest withQueryParams(GetSalesTaxesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSalesTaxesSecurity security;
    public GetSalesTaxesRequest withSecurity(GetSalesTaxesSecurity security) {
        this.security = security;
        return this;
    }
}