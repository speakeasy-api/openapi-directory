package openapisdk.models.operations;



public class CompaniesAllRequest {
    public CompaniesAllQueryParams queryParams;
    public CompaniesAllRequest withQueryParams(CompaniesAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CompaniesAllHeaders headers;
    public CompaniesAllRequest withHeaders(CompaniesAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CompaniesAllSecurity security;
    public CompaniesAllRequest withSecurity(CompaniesAllSecurity security) {
        this.security = security;
        return this;
    }
}