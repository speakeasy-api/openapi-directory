package openapisdk.models.operations;



public class GetUsersUsernameMembersRequest {
    public GetUsersUsernameMembersPathParams pathParams;
    public GetUsersUsernameMembersRequest withPathParams(GetUsersUsernameMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsersUsernameMembersSecurity security;
    public GetUsersUsernameMembersRequest withSecurity(GetUsersUsernameMembersSecurity security) {
        this.security = security;
        return this;
    }
}