package openapisdk.models.operations;



public class GetV3PurchasedAssetsResponse {
    public String contentType;
    public GetV3PurchasedAssetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PreviousAssetPurchases previousAssetPurchases;
    public GetV3PurchasedAssetsResponse withPreviousAssetPurchases(openapisdk.models.shared.PreviousAssetPurchases previousAssetPurchases) {
        this.previousAssetPurchases = previousAssetPurchases;
        return this;
    }
    public Long statusCode;
    public GetV3PurchasedAssetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}