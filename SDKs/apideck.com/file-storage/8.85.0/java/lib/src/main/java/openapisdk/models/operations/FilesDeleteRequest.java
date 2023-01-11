package openapisdk.models.operations;



public class FilesDeleteRequest {
    public FilesDeletePathParams pathParams;
    public FilesDeleteRequest withPathParams(FilesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FilesDeleteQueryParams queryParams;
    public FilesDeleteRequest withQueryParams(FilesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FilesDeleteHeaders headers;
    public FilesDeleteRequest withHeaders(FilesDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public FilesDeleteSecurity security;
    public FilesDeleteRequest withSecurity(FilesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}