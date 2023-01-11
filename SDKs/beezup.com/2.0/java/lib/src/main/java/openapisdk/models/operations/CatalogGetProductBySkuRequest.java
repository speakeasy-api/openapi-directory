package openapisdk.models.operations;



public class CatalogGetProductBySkuRequest {
    public CatalogGetProductBySkuPathParams pathParams;
    public CatalogGetProductBySkuRequest withPathParams(CatalogGetProductBySkuPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CatalogGetProductBySkuQueryParams queryParams;
    public CatalogGetProductBySkuRequest withQueryParams(CatalogGetProductBySkuQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}