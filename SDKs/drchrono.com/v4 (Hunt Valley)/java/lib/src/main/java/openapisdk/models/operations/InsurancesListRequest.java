package openapisdk.models.operations;



public class InsurancesListRequest {
    public InsurancesListQueryParams queryParams;
    public InsurancesListRequest withQueryParams(InsurancesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public InsurancesListSecurity security;
    public InsurancesListRequest withSecurity(InsurancesListSecurity security) {
        this.security = security;
        return this;
    }
}