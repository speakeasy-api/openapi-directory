package openapisdk.models.operations;



public class ListStudioComponentsRequest {
    public ListStudioComponentsPathParams pathParams;
    public ListStudioComponentsRequest withPathParams(ListStudioComponentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListStudioComponentsQueryParams queryParams;
    public ListStudioComponentsRequest withQueryParams(ListStudioComponentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListStudioComponentsHeaders headers;
    public ListStudioComponentsRequest withHeaders(ListStudioComponentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}