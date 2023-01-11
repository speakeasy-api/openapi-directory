package openapisdk.models.operations;



public class DownloadFileByIdRequest {
    public DownloadFileByIdPathParams pathParams;
    public DownloadFileByIdRequest withPathParams(DownloadFileByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DownloadFileByIdSecurity security;
    public DownloadFileByIdRequest withSecurity(DownloadFileByIdSecurity security) {
        this.security = security;
        return this;
    }
}