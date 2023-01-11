package openapisdk.models.operations;



public class ListDataSourcesRequest {
    public ListDataSourcesPathParams pathParams;
    public ListDataSourcesRequest withPathParams(ListDataSourcesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDataSourcesQueryParams queryParams;
    public ListDataSourcesRequest withQueryParams(ListDataSourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDataSourcesHeaders headers;
    public ListDataSourcesRequest withHeaders(ListDataSourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
}