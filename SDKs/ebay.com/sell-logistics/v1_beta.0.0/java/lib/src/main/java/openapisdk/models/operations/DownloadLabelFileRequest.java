package openapisdk.models.operations;



public class DownloadLabelFileRequest {
    public DownloadLabelFilePathParams pathParams;
    public DownloadLabelFileRequest withPathParams(DownloadLabelFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DownloadLabelFileSecurity security;
    public DownloadLabelFileRequest withSecurity(DownloadLabelFileSecurity security) {
        this.security = security;
        return this;
    }
}