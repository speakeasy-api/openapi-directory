package openapisdk.models.operations;



public class ListInvitationsRequest {
    public ListInvitationsQueryParams queryParams;
    public ListInvitationsRequest withQueryParams(ListInvitationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListInvitationsHeaders headers;
    public ListInvitationsRequest withHeaders(ListInvitationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}