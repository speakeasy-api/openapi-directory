package openapisdk.models.operations;



public class GetFoodBrandedNamePhpResponse {
    public openapisdk.models.shared.BrandedFoodObject brandedFoodObject;
    public GetFoodBrandedNamePhpResponse withBrandedFoodObject(openapisdk.models.shared.BrandedFoodObject brandedFoodObject) {
        this.brandedFoodObject = brandedFoodObject;
        return this;
    }
    public String contentType;
    public GetFoodBrandedNamePhpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFoodBrandedNamePhpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}