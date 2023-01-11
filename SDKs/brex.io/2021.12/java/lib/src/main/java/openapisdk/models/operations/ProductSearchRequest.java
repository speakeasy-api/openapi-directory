package openapisdk.models.operations;



public class ProductSearchRequest {
    public ProductSearchPathParams pathParams;
    public ProductSearchRequest withPathParams(ProductSearchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProductSearchSecurity security;
    public ProductSearchRequest withSecurity(ProductSearchSecurity security) {
        this.security = security;
        return this;
    }
}