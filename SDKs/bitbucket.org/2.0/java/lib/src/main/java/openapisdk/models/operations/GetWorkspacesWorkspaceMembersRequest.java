package openapisdk.models.operations;



public class GetWorkspacesWorkspaceMembersRequest {
    public GetWorkspacesWorkspaceMembersPathParams pathParams;
    public GetWorkspacesWorkspaceMembersRequest withPathParams(GetWorkspacesWorkspaceMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWorkspacesWorkspaceMembersSecurity security;
    public GetWorkspacesWorkspaceMembersRequest withSecurity(GetWorkspacesWorkspaceMembersSecurity security) {
        this.security = security;
        return this;
    }
}