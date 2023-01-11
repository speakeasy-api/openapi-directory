package openapisdk.models.operations;



public class ReposListReleaseAssetsResponse {
    public String contentType;
    public ReposListReleaseAssetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListReleaseAssetsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListReleaseAssetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ReleaseAsset[] releaseAssets;
    public ReposListReleaseAssetsResponse withReleaseAssets(openapisdk.models.shared.ReleaseAsset[] releaseAssets) {
        this.releaseAssets = releaseAssets;
        return this;
    }
}