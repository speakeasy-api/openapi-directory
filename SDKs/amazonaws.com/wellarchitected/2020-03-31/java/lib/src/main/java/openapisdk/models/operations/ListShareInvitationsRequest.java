package openapisdk.models.operations;



public class ListShareInvitationsRequest {
    public ListShareInvitationsQueryParams queryParams;
    public ListShareInvitationsRequest withQueryParams(ListShareInvitationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListShareInvitationsHeaders headers;
    public ListShareInvitationsRequest withHeaders(ListShareInvitationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}