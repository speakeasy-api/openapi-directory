package openapisdk.models.operations;



public class ListProjectAssetsRequest {
    public ListProjectAssetsPathParams pathParams;
    public ListProjectAssetsRequest withPathParams(ListProjectAssetsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListProjectAssetsQueryParams queryParams;
    public ListProjectAssetsRequest withQueryParams(ListProjectAssetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProjectAssetsHeaders headers;
    public ListProjectAssetsRequest withHeaders(ListProjectAssetsHeaders headers) {
        this.headers = headers;
        return this;
    }
}