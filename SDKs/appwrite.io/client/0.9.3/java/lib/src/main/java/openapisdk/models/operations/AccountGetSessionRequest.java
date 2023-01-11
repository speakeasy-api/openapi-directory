package openapisdk.models.operations;



public class AccountGetSessionRequest {
    public AccountGetSessionPathParams pathParams;
    public AccountGetSessionRequest withPathParams(AccountGetSessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccountGetSessionSecurity security;
    public AccountGetSessionRequest withSecurity(AccountGetSessionSecurity security) {
        this.security = security;
        return this;
    }
}