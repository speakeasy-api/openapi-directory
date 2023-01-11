package openapisdk.models.operations;



public class GetV3DownloadsRequest {
    public GetV3DownloadsQueryParams queryParams;
    public GetV3DownloadsRequest withQueryParams(GetV3DownloadsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetV3DownloadsHeaders headers;
    public GetV3DownloadsRequest withHeaders(GetV3DownloadsHeaders headers) {
        this.headers = headers;
        return this;
    }
}