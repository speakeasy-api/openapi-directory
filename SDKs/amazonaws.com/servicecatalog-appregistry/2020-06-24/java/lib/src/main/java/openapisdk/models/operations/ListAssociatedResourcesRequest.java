package openapisdk.models.operations;



public class ListAssociatedResourcesRequest {
    public ListAssociatedResourcesPathParams pathParams;
    public ListAssociatedResourcesRequest withPathParams(ListAssociatedResourcesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAssociatedResourcesQueryParams queryParams;
    public ListAssociatedResourcesRequest withQueryParams(ListAssociatedResourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssociatedResourcesHeaders headers;
    public ListAssociatedResourcesRequest withHeaders(ListAssociatedResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
}