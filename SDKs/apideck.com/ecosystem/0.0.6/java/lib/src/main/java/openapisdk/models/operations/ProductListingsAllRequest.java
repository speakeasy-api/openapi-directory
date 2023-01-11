package openapisdk.models.operations;



public class ProductListingsAllRequest {
    public ProductListingsAllPathParams pathParams;
    public ProductListingsAllRequest withPathParams(ProductListingsAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProductListingsAllQueryParams queryParams;
    public ProductListingsAllRequest withQueryParams(ProductListingsAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}