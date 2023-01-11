package openapisdk.models.operations;



public class AccountInstitutionCurationsRequest {
    public AccountInstitutionCurationsQueryParams queryParams;
    public AccountInstitutionCurationsRequest withQueryParams(AccountInstitutionCurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AccountInstitutionCurationsSecurity security;
    public AccountInstitutionCurationsRequest withSecurity(AccountInstitutionCurationsSecurity security) {
        this.security = security;
        return this;
    }
}