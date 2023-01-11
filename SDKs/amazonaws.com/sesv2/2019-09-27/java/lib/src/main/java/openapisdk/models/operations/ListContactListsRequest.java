package openapisdk.models.operations;



public class ListContactListsRequest {
    public ListContactListsQueryParams queryParams;
    public ListContactListsRequest withQueryParams(ListContactListsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListContactListsHeaders headers;
    public ListContactListsRequest withHeaders(ListContactListsHeaders headers) {
        this.headers = headers;
        return this;
    }
}