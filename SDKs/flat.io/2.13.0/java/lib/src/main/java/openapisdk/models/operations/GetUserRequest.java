package openapisdk.models.operations;



public class GetUserRequest {
    public GetUserPathParams pathParams;
    public GetUserRequest withPathParams(GetUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserSecurity security;
    public GetUserRequest withSecurity(GetUserSecurity security) {
        this.security = security;
        return this;
    }
}