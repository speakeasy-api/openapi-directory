package openapisdk.models.operations;



public class GetFoodBrandedBarcodePhpRequest {
    public GetFoodBrandedBarcodePhpQueryParams queryParams;
    public GetFoodBrandedBarcodePhpRequest withQueryParams(GetFoodBrandedBarcodePhpQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFoodBrandedBarcodePhpSecurity security;
    public GetFoodBrandedBarcodePhpRequest withSecurity(GetFoodBrandedBarcodePhpSecurity security) {
        this.security = security;
        return this;
    }
}