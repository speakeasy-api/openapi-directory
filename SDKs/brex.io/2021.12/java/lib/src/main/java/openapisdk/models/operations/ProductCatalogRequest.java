package openapisdk.models.operations;



public class ProductCatalogRequest {
    public ProductCatalogPathParams pathParams;
    public ProductCatalogRequest withPathParams(ProductCatalogPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProductCatalogSecurity security;
    public ProductCatalogRequest withSecurity(ProductCatalogSecurity security) {
        this.security = security;
        return this;
    }
}