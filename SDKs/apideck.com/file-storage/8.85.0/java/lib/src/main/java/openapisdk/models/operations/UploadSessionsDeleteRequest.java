package openapisdk.models.operations;



public class UploadSessionsDeleteRequest {
    public UploadSessionsDeletePathParams pathParams;
    public UploadSessionsDeleteRequest withPathParams(UploadSessionsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UploadSessionsDeleteQueryParams queryParams;
    public UploadSessionsDeleteRequest withQueryParams(UploadSessionsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UploadSessionsDeleteHeaders headers;
    public UploadSessionsDeleteRequest withHeaders(UploadSessionsDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public UploadSessionsDeleteSecurity security;
    public UploadSessionsDeleteRequest withSecurity(UploadSessionsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}