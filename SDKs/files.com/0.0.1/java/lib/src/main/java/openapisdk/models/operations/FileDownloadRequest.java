package openapisdk.models.operations;



public class FileDownloadRequest {
    public FileDownloadPathParams pathParams;
    public FileDownloadRequest withPathParams(FileDownloadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileDownloadQueryParams queryParams;
    public FileDownloadRequest withQueryParams(FileDownloadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}