package openapisdk.models.operations;



public class ListTasksRequest {
    public ListTasksQueryParams queryParams;
    public ListTasksRequest withQueryParams(ListTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTasksHeaders headers;
    public ListTasksRequest withHeaders(ListTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
}