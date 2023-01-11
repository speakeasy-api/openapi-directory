package openapisdk.models.operations;



public class CompanyIdSuperRequest {
    public CompanyIdSuperPathParams pathParams;
    public CompanyIdSuperRequest withPathParams(CompanyIdSuperPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompanyIdSuperQueryParams queryParams;
    public CompanyIdSuperRequest withQueryParams(CompanyIdSuperQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CompanyIdSuperSecurity security;
    public CompanyIdSuperRequest withSecurity(CompanyIdSuperSecurity security) {
        this.security = security;
        return this;
    }
}