package openapisdk.models.operations;



public class PostUsersSelectedUserHooksRequest {
    public PostUsersSelectedUserHooksPathParams pathParams;
    public PostUsersSelectedUserHooksRequest withPathParams(PostUsersSelectedUserHooksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostUsersSelectedUserHooksSecurity security;
    public PostUsersSelectedUserHooksRequest withSecurity(PostUsersSelectedUserHooksSecurity security) {
        this.security = security;
        return this;
    }
}