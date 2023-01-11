package openapisdk.models.operations;



public class CompanyDeepsearchLeiRequest {
    public CompanyDeepsearchLeiPathParams pathParams;
    public CompanyDeepsearchLeiRequest withPathParams(CompanyDeepsearchLeiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompanyDeepsearchLeiQueryParams queryParams;
    public CompanyDeepsearchLeiRequest withQueryParams(CompanyDeepsearchLeiQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CompanyDeepsearchLeiSecurity security;
    public CompanyDeepsearchLeiRequest withSecurity(CompanyDeepsearchLeiSecurity security) {
        this.security = security;
        return this;
    }
}