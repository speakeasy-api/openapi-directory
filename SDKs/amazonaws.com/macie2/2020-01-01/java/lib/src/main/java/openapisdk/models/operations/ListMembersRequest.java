package openapisdk.models.operations;



public class ListMembersRequest {
    public ListMembersQueryParams queryParams;
    public ListMembersRequest withQueryParams(ListMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMembersHeaders headers;
    public ListMembersRequest withHeaders(ListMembersHeaders headers) {
        this.headers = headers;
        return this;
    }
}