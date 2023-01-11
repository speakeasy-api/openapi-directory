package openapisdk.models.operations;



public class GetFoodIngredientSearchPhpResponse {
    public String contentType;
    public GetFoodIngredientSearchPhpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IngredientObject ingredientObject;
    public GetFoodIngredientSearchPhpResponse withIngredientObject(openapisdk.models.shared.IngredientObject ingredientObject) {
        this.ingredientObject = ingredientObject;
        return this;
    }
    public Long statusCode;
    public GetFoodIngredientSearchPhpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}