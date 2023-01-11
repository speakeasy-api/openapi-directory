package openapisdk.models.operations;



public class AccountDeleteSessionRequest {
    public AccountDeleteSessionPathParams pathParams;
    public AccountDeleteSessionRequest withPathParams(AccountDeleteSessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccountDeleteSessionSecurity security;
    public AccountDeleteSessionRequest withSecurity(AccountDeleteSessionSecurity security) {
        this.security = security;
        return this;
    }
}