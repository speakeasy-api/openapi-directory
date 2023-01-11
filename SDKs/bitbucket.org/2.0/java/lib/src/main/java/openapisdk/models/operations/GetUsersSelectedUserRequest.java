package openapisdk.models.operations;



public class GetUsersSelectedUserRequest {
    public GetUsersSelectedUserPathParams pathParams;
    public GetUsersSelectedUserRequest withPathParams(GetUsersSelectedUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsersSelectedUserSecurity security;
    public GetUsersSelectedUserRequest withSecurity(GetUsersSelectedUserSecurity security) {
        this.security = security;
        return this;
    }
}