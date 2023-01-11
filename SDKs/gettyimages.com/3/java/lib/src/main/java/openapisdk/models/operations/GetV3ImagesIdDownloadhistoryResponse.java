package openapisdk.models.operations;



public class GetV3ImagesIdDownloadhistoryResponse {
    public openapisdk.models.shared.AssetDownloadHistoryResults assetDownloadHistoryResults;
    public GetV3ImagesIdDownloadhistoryResponse withAssetDownloadHistoryResults(openapisdk.models.shared.AssetDownloadHistoryResults assetDownloadHistoryResults) {
        this.assetDownloadHistoryResults = assetDownloadHistoryResults;
        return this;
    }
    public String contentType;
    public GetV3ImagesIdDownloadhistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV3ImagesIdDownloadhistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}