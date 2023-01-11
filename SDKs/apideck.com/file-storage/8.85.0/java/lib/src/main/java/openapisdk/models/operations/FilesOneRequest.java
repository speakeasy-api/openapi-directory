package openapisdk.models.operations;



public class FilesOneRequest {
    public FilesOnePathParams pathParams;
    public FilesOneRequest withPathParams(FilesOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FilesOneQueryParams queryParams;
    public FilesOneRequest withQueryParams(FilesOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FilesOneHeaders headers;
    public FilesOneRequest withHeaders(FilesOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public FilesOneSecurity security;
    public FilesOneRequest withSecurity(FilesOneSecurity security) {
        this.security = security;
        return this;
    }
}