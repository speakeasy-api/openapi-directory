package openapisdk.models.operations;



public class GetTeamsUsernameFollowingRequest {
    public GetTeamsUsernameFollowingPathParams pathParams;
    public GetTeamsUsernameFollowingRequest withPathParams(GetTeamsUsernameFollowingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsUsernameFollowingSecurity security;
    public GetTeamsUsernameFollowingRequest withSecurity(GetTeamsUsernameFollowingSecurity security) {
        this.security = security;
        return this;
    }
}