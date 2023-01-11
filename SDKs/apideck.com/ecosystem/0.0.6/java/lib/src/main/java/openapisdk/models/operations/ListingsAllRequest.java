package openapisdk.models.operations;



public class ListingsAllRequest {
    public ListingsAllPathParams pathParams;
    public ListingsAllRequest withPathParams(ListingsAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListingsAllQueryParams queryParams;
    public ListingsAllRequest withQueryParams(ListingsAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}