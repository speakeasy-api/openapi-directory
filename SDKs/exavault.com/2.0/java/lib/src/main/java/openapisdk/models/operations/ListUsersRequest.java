package openapisdk.models.operations;



public class ListUsersRequest {
    public ListUsersQueryParams queryParams;
    public ListUsersRequest withQueryParams(ListUsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsersHeaders headers;
    public ListUsersRequest withHeaders(ListUsersHeaders headers) {
        this.headers = headers;
        return this;
    }
}