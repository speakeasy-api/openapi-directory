package openapisdk.models.operations;



public class ReposUploadReleaseAssetResponse {
    public String contentType;
    public ReposUploadReleaseAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposUploadReleaseAssetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ReleaseAsset releaseAsset;
    public ReposUploadReleaseAssetResponse withReleaseAsset(openapisdk.models.shared.ReleaseAsset releaseAsset) {
        this.releaseAsset = releaseAsset;
        return this;
    }
}