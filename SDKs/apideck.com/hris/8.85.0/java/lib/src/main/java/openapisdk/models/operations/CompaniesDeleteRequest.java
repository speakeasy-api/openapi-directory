package openapisdk.models.operations;



public class CompaniesDeleteRequest {
    public CompaniesDeletePathParams pathParams;
    public CompaniesDeleteRequest withPathParams(CompaniesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompaniesDeleteQueryParams queryParams;
    public CompaniesDeleteRequest withQueryParams(CompaniesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CompaniesDeleteHeaders headers;
    public CompaniesDeleteRequest withHeaders(CompaniesDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CompaniesDeleteSecurity security;
    public CompaniesDeleteRequest withSecurity(CompaniesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}