package openapisdk.models.operations;



public class GetFoodBrandedSearchPhpResponse {
    public openapisdk.models.shared.BrandedFoodObject brandedFoodObject;
    public GetFoodBrandedSearchPhpResponse withBrandedFoodObject(openapisdk.models.shared.BrandedFoodObject brandedFoodObject) {
        this.brandedFoodObject = brandedFoodObject;
        return this;
    }
    public String contentType;
    public GetFoodBrandedSearchPhpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFoodBrandedSearchPhpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}