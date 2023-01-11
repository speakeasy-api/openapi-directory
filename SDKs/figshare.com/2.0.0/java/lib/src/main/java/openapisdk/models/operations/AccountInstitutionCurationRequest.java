package openapisdk.models.operations;



public class AccountInstitutionCurationRequest {
    public AccountInstitutionCurationPathParams pathParams;
    public AccountInstitutionCurationRequest withPathParams(AccountInstitutionCurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccountInstitutionCurationSecurity security;
    public AccountInstitutionCurationRequest withSecurity(AccountInstitutionCurationSecurity security) {
        this.security = security;
        return this;
    }
}