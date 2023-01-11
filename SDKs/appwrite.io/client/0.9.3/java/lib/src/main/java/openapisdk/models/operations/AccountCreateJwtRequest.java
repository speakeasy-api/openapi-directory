package openapisdk.models.operations;



public class AccountCreateJwtRequest {
    public AccountCreateJwtSecurity security;
    public AccountCreateJwtRequest withSecurity(AccountCreateJwtSecurity security) {
        this.security = security;
        return this;
    }
}