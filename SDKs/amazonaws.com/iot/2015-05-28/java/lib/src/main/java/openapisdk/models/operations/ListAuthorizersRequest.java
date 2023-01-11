package openapisdk.models.operations;



public class ListAuthorizersRequest {
    public ListAuthorizersQueryParams queryParams;
    public ListAuthorizersRequest withQueryParams(ListAuthorizersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAuthorizersHeaders headers;
    public ListAuthorizersRequest withHeaders(ListAuthorizersHeaders headers) {
        this.headers = headers;
        return this;
    }
}