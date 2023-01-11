package openapisdk.models.operations;



public class ListWorkspacesRequest {
    public ListWorkspacesQueryParams queryParams;
    public ListWorkspacesRequest withQueryParams(ListWorkspacesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkspacesHeaders headers;
    public ListWorkspacesRequest withHeaders(ListWorkspacesHeaders headers) {
        this.headers = headers;
        return this;
    }
}