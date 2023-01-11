package openapisdk.models.operations;



public class ProductOrderWithOptionRequest {
    public ProductOrderWithOptionPathParams pathParams;
    public ProductOrderWithOptionRequest withPathParams(ProductOrderWithOptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProductOrderWithOptionSecurity security;
    public ProductOrderWithOptionRequest withSecurity(ProductOrderWithOptionSecurity security) {
        this.security = security;
        return this;
    }
}