package openapisdk.models.operations;



public class GetUsersSelectedUserHooksRequest {
    public GetUsersSelectedUserHooksPathParams pathParams;
    public GetUsersSelectedUserHooksRequest withPathParams(GetUsersSelectedUserHooksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsersSelectedUserHooksSecurity security;
    public GetUsersSelectedUserHooksRequest withSecurity(GetUsersSelectedUserHooksSecurity security) {
        this.security = security;
        return this;
    }
}