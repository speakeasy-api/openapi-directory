package openapisdk.models.operations;



public class GetTeamsUsernameProjectsRequest {
    public GetTeamsUsernameProjectsPathParams pathParams;
    public GetTeamsUsernameProjectsRequest withPathParams(GetTeamsUsernameProjectsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsUsernameProjectsSecurity security;
    public GetTeamsUsernameProjectsRequest withSecurity(GetTeamsUsernameProjectsSecurity security) {
        this.security = security;
        return this;
    }
}