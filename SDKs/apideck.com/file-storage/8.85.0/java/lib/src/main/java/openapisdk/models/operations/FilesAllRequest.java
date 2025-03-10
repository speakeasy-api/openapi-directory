package openapisdk.models.operations;



public class FilesAllRequest {
    public FilesAllQueryParams queryParams;
    public FilesAllRequest withQueryParams(FilesAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FilesAllHeaders headers;
    public FilesAllRequest withHeaders(FilesAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public FilesAllSecurity security;
    public FilesAllRequest withSecurity(FilesAllSecurity security) {
        this.security = security;
        return this;
    }
}