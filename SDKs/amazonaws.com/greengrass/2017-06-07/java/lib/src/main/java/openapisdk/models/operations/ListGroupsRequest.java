package openapisdk.models.operations;



public class ListGroupsRequest {
    public ListGroupsQueryParams queryParams;
    public ListGroupsRequest withQueryParams(ListGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGroupsHeaders headers;
    public ListGroupsRequest withHeaders(ListGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
}