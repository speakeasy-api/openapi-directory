package openapisdk.models.operations;



public class CompaniesOneRequest {
    public CompaniesOnePathParams pathParams;
    public CompaniesOneRequest withPathParams(CompaniesOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompaniesOneQueryParams queryParams;
    public CompaniesOneRequest withQueryParams(CompaniesOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CompaniesOneHeaders headers;
    public CompaniesOneRequest withHeaders(CompaniesOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CompaniesOneSecurity security;
    public CompaniesOneRequest withSecurity(CompaniesOneSecurity security) {
        this.security = security;
        return this;
    }
}