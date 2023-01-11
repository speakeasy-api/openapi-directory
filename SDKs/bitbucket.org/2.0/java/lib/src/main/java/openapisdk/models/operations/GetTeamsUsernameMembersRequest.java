package openapisdk.models.operations;



public class GetTeamsUsernameMembersRequest {
    public GetTeamsUsernameMembersPathParams pathParams;
    public GetTeamsUsernameMembersRequest withPathParams(GetTeamsUsernameMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsUsernameMembersSecurity security;
    public GetTeamsUsernameMembersRequest withSecurity(GetTeamsUsernameMembersSecurity security) {
        this.security = security;
        return this;
    }
}