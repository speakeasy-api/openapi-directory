package openapisdk.models.operations;



public class GetFoodBrandedSearchPhpRequest {
    public GetFoodBrandedSearchPhpQueryParams queryParams;
    public GetFoodBrandedSearchPhpRequest withQueryParams(GetFoodBrandedSearchPhpQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFoodBrandedSearchPhpSecurity security;
    public GetFoodBrandedSearchPhpRequest withSecurity(GetFoodBrandedSearchPhpSecurity security) {
        this.security = security;
        return this;
    }
}