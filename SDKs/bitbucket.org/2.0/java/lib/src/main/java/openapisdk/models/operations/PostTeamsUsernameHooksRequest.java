package openapisdk.models.operations;



public class PostTeamsUsernameHooksRequest {
    public PostTeamsUsernameHooksPathParams pathParams;
    public PostTeamsUsernameHooksRequest withPathParams(PostTeamsUsernameHooksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostTeamsUsernameHooksSecurity security;
    public PostTeamsUsernameHooksRequest withSecurity(PostTeamsUsernameHooksSecurity security) {
        this.security = security;
        return this;
    }
}