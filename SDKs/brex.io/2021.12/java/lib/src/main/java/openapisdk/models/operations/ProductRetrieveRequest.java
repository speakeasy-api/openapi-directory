package openapisdk.models.operations;



public class ProductRetrieveRequest {
    public ProductRetrievePathParams pathParams;
    public ProductRetrieveRequest withPathParams(ProductRetrievePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProductRetrieveSecurity security;
    public ProductRetrieveRequest withSecurity(ProductRetrieveSecurity security) {
        this.security = security;
        return this;
    }
}