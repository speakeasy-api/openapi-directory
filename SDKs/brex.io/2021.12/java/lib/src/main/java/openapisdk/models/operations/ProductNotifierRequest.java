package openapisdk.models.operations;



public class ProductNotifierRequest {
    public ProductNotifierPathParams pathParams;
    public ProductNotifierRequest withPathParams(ProductNotifierPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProductNotifierSecurity security;
    public ProductNotifierRequest withSecurity(ProductNotifierSecurity security) {
        this.security = security;
        return this;
    }
}