package openapisdk.models.operations;



public class PrivateInstitutionAccountsListRequest {
    public PrivateInstitutionAccountsListQueryParams queryParams;
    public PrivateInstitutionAccountsListRequest withQueryParams(PrivateInstitutionAccountsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PrivateInstitutionAccountsListSecurity security;
    public PrivateInstitutionAccountsListRequest withSecurity(PrivateInstitutionAccountsListSecurity security) {
        this.security = security;
        return this;
    }
}