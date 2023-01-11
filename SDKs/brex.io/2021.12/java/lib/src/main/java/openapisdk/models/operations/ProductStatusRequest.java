package openapisdk.models.operations;



public class ProductStatusRequest {
    public ProductStatusPathParams pathParams;
    public ProductStatusRequest withPathParams(ProductStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProductStatusSecurity security;
    public ProductStatusRequest withSecurity(ProductStatusSecurity security) {
        this.security = security;
        return this;
    }
}