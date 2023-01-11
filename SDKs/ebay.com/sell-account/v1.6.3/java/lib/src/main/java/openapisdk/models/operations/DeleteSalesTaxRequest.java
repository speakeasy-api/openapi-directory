package openapisdk.models.operations;



public class DeleteSalesTaxRequest {
    public DeleteSalesTaxPathParams pathParams;
    public DeleteSalesTaxRequest withPathParams(DeleteSalesTaxPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSalesTaxSecurity security;
    public DeleteSalesTaxRequest withSecurity(DeleteSalesTaxSecurity security) {
        this.security = security;
        return this;
    }
}