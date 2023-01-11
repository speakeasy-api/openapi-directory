package openapisdk.models.operations;



public class GetFactCategoriesRequest {
    public GetFactCategoriesQueryParams queryParams;
    public GetFactCategoriesRequest withQueryParams(GetFactCategoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFactCategoriesSecurity security;
    public GetFactCategoriesRequest withSecurity(GetFactCategoriesSecurity security) {
        this.security = security;
        return this;
    }
}