package openapisdk.models.operations;



public class GetV3VideosIdDownloadhistoryResponse {
    public openapisdk.models.shared.AssetDownloadHistoryResults assetDownloadHistoryResults;
    public GetV3VideosIdDownloadhistoryResponse withAssetDownloadHistoryResults(openapisdk.models.shared.AssetDownloadHistoryResults assetDownloadHistoryResults) {
        this.assetDownloadHistoryResults = assetDownloadHistoryResults;
        return this;
    }
    public String contentType;
    public GetV3VideosIdDownloadhistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV3VideosIdDownloadhistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}