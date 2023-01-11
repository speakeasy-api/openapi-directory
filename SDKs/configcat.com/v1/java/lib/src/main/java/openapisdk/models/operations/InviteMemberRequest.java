package openapisdk.models.operations;



public class InviteMemberRequest {
    public InviteMemberPathParams pathParams;
    public InviteMemberRequest withPathParams(InviteMemberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InviteMemberRequests request;
    public InviteMemberRequest withRequest(InviteMemberRequests request) {
        this.request = request;
        return this;
    }
}