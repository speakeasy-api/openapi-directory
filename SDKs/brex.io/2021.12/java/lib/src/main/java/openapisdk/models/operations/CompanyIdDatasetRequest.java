package openapisdk.models.operations;



public class CompanyIdDatasetRequest {
    public CompanyIdDatasetPathParams pathParams;
    public CompanyIdDatasetRequest withPathParams(CompanyIdDatasetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompanyIdDatasetQueryParams queryParams;
    public CompanyIdDatasetRequest withQueryParams(CompanyIdDatasetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CompanyIdDatasetSecurity security;
    public CompanyIdDatasetRequest withSecurity(CompanyIdDatasetSecurity security) {
        this.security = security;
        return this;
    }
}