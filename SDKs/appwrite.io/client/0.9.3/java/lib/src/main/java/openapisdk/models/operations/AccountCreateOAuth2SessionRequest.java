package openapisdk.models.operations;



public class AccountCreateOAuth2SessionRequest {
    public AccountCreateOAuth2SessionPathParams pathParams;
    public AccountCreateOAuth2SessionRequest withPathParams(AccountCreateOAuth2SessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccountCreateOAuth2SessionQueryParams queryParams;
    public AccountCreateOAuth2SessionRequest withQueryParams(AccountCreateOAuth2SessionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AccountCreateOAuth2SessionSecurity security;
    public AccountCreateOAuth2SessionRequest withSecurity(AccountCreateOAuth2SessionSecurity security) {
        this.security = security;
        return this;
    }
}