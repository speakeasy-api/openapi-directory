package openapisdk.models.operations;



public class CompanySearchNameRequest {
    public CompanySearchNamePathParams pathParams;
    public CompanySearchNameRequest withPathParams(CompanySearchNamePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompanySearchNameQueryParams queryParams;
    public CompanySearchNameRequest withQueryParams(CompanySearchNameQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CompanySearchNameSecurity security;
    public CompanySearchNameRequest withSecurity(CompanySearchNameSecurity security) {
        this.security = security;
        return this;
    }
}