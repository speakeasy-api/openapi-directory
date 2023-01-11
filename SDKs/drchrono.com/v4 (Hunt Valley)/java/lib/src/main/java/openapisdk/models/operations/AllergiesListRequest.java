package openapisdk.models.operations;



public class AllergiesListRequest {
    public AllergiesListQueryParams queryParams;
    public AllergiesListRequest withQueryParams(AllergiesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AllergiesListSecurity security;
    public AllergiesListRequest withSecurity(AllergiesListSecurity security) {
        this.security = security;
        return this;
    }
}