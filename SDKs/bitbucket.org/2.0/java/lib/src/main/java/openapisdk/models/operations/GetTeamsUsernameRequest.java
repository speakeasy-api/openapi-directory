package openapisdk.models.operations;



public class GetTeamsUsernameRequest {
    public GetTeamsUsernamePathParams pathParams;
    public GetTeamsUsernameRequest withPathParams(GetTeamsUsernamePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsUsernameSecurity security;
    public GetTeamsUsernameRequest withSecurity(GetTeamsUsernameSecurity security) {
        this.security = security;
        return this;
    }
}