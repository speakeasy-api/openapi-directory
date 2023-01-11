package openapisdk.models.operations;



public class ReposGetReleaseAssetResponse {
    public String contentType;
    public ReposGetReleaseAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetReleaseAssetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetReleaseAssetResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ReleaseAsset releaseAsset;
    public ReposGetReleaseAssetResponse withReleaseAsset(openapisdk.models.shared.ReleaseAsset releaseAsset) {
        this.releaseAsset = releaseAsset;
        return this;
    }
    public ReposGetReleaseAsset415ApplicationJson reposGetReleaseAsset415ApplicationJSONObject;
    public ReposGetReleaseAssetResponse withReposGetReleaseAsset415ApplicationJsonObject(ReposGetReleaseAsset415ApplicationJson reposGetReleaseAsset415ApplicationJSONObject) {
        this.reposGetReleaseAsset415ApplicationJSONObject = reposGetReleaseAsset415ApplicationJSONObject;
        return this;
    }
}