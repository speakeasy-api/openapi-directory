package openapisdk.models.operations;



public class PostV3AssetLicensingAssetIdResponse {
    public openapisdk.models.shared.AssetLicensingResponse assetLicensingResponse;
    public PostV3AssetLicensingAssetIdResponse withAssetLicensingResponse(openapisdk.models.shared.AssetLicensingResponse assetLicensingResponse) {
        this.assetLicensingResponse = assetLicensingResponse;
        return this;
    }
    public String contentType;
    public PostV3AssetLicensingAssetIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostV3AssetLicensingAssetIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}