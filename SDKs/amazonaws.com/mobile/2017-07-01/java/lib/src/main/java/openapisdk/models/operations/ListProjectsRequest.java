package openapisdk.models.operations;



public class ListProjectsRequest {
    public ListProjectsQueryParams queryParams;
    public ListProjectsRequest withQueryParams(ListProjectsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProjectsHeaders headers;
    public ListProjectsRequest withHeaders(ListProjectsHeaders headers) {
        this.headers = headers;
        return this;
    }
}