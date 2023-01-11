package openapisdk.models.operations;



public class GetAuthorizationCodeIdRequest {
    public GetAuthorizationCodeIdQueryParams queryParams;
    public GetAuthorizationCodeIdRequest withQueryParams(GetAuthorizationCodeIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAuthorizationCodeIdSecurity security;
    public GetAuthorizationCodeIdRequest withSecurity(GetAuthorizationCodeIdSecurity security) {
        this.security = security;
        return this;
    }
}