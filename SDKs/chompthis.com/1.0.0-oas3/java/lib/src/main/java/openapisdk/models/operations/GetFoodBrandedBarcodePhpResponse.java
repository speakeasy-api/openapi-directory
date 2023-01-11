package openapisdk.models.operations;



public class GetFoodBrandedBarcodePhpResponse {
    public openapisdk.models.shared.BrandedFoodObject brandedFoodObject;
    public GetFoodBrandedBarcodePhpResponse withBrandedFoodObject(openapisdk.models.shared.BrandedFoodObject brandedFoodObject) {
        this.brandedFoodObject = brandedFoodObject;
        return this;
    }
    public String contentType;
    public GetFoodBrandedBarcodePhpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFoodBrandedBarcodePhpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}