package openapisdk.models.operations;



public class ProductNotifierCreateRequest {
    public ProductNotifierCreatePathParams pathParams;
    public ProductNotifierCreateRequest withPathParams(ProductNotifierCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProductNotifierCreateSecurity security;
    public ProductNotifierCreateRequest withSecurity(ProductNotifierCreateSecurity security) {
        this.security = security;
        return this;
    }
}