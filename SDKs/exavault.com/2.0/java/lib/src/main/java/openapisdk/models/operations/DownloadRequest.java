package openapisdk.models.operations;



public class DownloadRequest {
    public DownloadQueryParams queryParams;
    public DownloadRequest withQueryParams(DownloadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DownloadHeaders headers;
    public DownloadRequest withHeaders(DownloadHeaders headers) {
        this.headers = headers;
        return this;
    }
}