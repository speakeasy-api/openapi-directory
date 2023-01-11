package openapisdk.models.operations;



public class CompanySearchNumberRequest {
    public CompanySearchNumberPathParams pathParams;
    public CompanySearchNumberRequest withPathParams(CompanySearchNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompanySearchNumberQueryParams queryParams;
    public CompanySearchNumberRequest withQueryParams(CompanySearchNumberQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CompanySearchNumberSecurity security;
    public CompanySearchNumberRequest withSecurity(CompanySearchNumberSecurity security) {
        this.security = security;
        return this;
    }
}