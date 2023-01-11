package openapisdk.models.operations;



public class PutV3AssetChangesChangeSetsResponse {
    public openapisdk.models.shared.AssetChanges assetChanges;
    public PutV3AssetChangesChangeSetsResponse withAssetChanges(openapisdk.models.shared.AssetChanges assetChanges) {
        this.assetChanges = assetChanges;
        return this;
    }
    public String contentType;
    public PutV3AssetChangesChangeSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutV3AssetChangesChangeSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}