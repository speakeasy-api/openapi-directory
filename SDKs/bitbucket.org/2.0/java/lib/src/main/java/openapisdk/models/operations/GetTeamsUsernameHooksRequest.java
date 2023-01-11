package openapisdk.models.operations;



public class GetTeamsUsernameHooksRequest {
    public GetTeamsUsernameHooksPathParams pathParams;
    public GetTeamsUsernameHooksRequest withPathParams(GetTeamsUsernameHooksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsUsernameHooksSecurity security;
    public GetTeamsUsernameHooksRequest withSecurity(GetTeamsUsernameHooksSecurity security) {
        this.security = security;
        return this;
    }
}