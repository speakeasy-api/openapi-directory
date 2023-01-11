package openapisdk.models.operations;



public class GetTeamsUsernameFollowersRequest {
    public GetTeamsUsernameFollowersPathParams pathParams;
    public GetTeamsUsernameFollowersRequest withPathParams(GetTeamsUsernameFollowersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsUsernameFollowersSecurity security;
    public GetTeamsUsernameFollowersRequest withSecurity(GetTeamsUsernameFollowersSecurity security) {
        this.security = security;
        return this;
    }
}