package openapisdk.models.operations;



public class UploadSessionsOneRequest {
    public String serverURL;
    public UploadSessionsOneRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UploadSessionsOnePathParams pathParams;
    public UploadSessionsOneRequest withPathParams(UploadSessionsOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UploadSessionsOneQueryParams queryParams;
    public UploadSessionsOneRequest withQueryParams(UploadSessionsOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UploadSessionsOneHeaders headers;
    public UploadSessionsOneRequest withHeaders(UploadSessionsOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public UploadSessionsOneSecurity security;
    public UploadSessionsOneRequest withSecurity(UploadSessionsOneSecurity security) {
        this.security = security;
        return this;
    }
}