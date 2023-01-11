package openapisdk.models.operations;



public class GetFoodIngredientSearchPhpRequest {
    public GetFoodIngredientSearchPhpQueryParams queryParams;
    public GetFoodIngredientSearchPhpRequest withQueryParams(GetFoodIngredientSearchPhpQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFoodIngredientSearchPhpSecurity security;
    public GetFoodIngredientSearchPhpRequest withSecurity(GetFoodIngredientSearchPhpSecurity security) {
        this.security = security;
        return this;
    }
}