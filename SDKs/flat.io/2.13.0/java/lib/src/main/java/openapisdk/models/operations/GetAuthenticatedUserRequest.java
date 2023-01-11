package openapisdk.models.operations;



public class GetAuthenticatedUserRequest {
    public GetAuthenticatedUserQueryParams queryParams;
    public GetAuthenticatedUserRequest withQueryParams(GetAuthenticatedUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAuthenticatedUserSecurity security;
    public GetAuthenticatedUserRequest withSecurity(GetAuthenticatedUserSecurity security) {
        this.security = security;
        return this;
    }
}