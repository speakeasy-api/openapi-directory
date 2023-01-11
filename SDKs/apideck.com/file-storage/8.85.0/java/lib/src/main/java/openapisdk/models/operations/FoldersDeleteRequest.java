package openapisdk.models.operations;



public class FoldersDeleteRequest {
    public FoldersDeletePathParams pathParams;
    public FoldersDeleteRequest withPathParams(FoldersDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FoldersDeleteQueryParams queryParams;
    public FoldersDeleteRequest withQueryParams(FoldersDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FoldersDeleteHeaders headers;
    public FoldersDeleteRequest withHeaders(FoldersDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public FoldersDeleteSecurity security;
    public FoldersDeleteRequest withSecurity(FoldersDeleteSecurity security) {
        this.security = security;
        return this;
    }
}