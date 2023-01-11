package openapisdk.models.operations;



public class ListTypesRequest {
    public ListTypesPathParams pathParams;
    public ListTypesRequest withPathParams(ListTypesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTypesQueryParams queryParams;
    public ListTypesRequest withQueryParams(ListTypesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTypesHeaders headers;
    public ListTypesRequest withHeaders(ListTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
}