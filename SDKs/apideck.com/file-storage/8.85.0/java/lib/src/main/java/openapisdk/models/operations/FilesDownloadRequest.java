package openapisdk.models.operations;



public class FilesDownloadRequest {
    public FilesDownloadPathParams pathParams;
    public FilesDownloadRequest withPathParams(FilesDownloadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FilesDownloadHeaders headers;
    public FilesDownloadRequest withHeaders(FilesDownloadHeaders headers) {
        this.headers = headers;
        return this;
    }
    public FilesDownloadSecurity security;
    public FilesDownloadRequest withSecurity(FilesDownloadSecurity security) {
        this.security = security;
        return this;
    }
}