package openapisdk.models.operations;



public class FoldersOneRequest {
    public FoldersOnePathParams pathParams;
    public FoldersOneRequest withPathParams(FoldersOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FoldersOneQueryParams queryParams;
    public FoldersOneRequest withQueryParams(FoldersOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FoldersOneHeaders headers;
    public FoldersOneRequest withHeaders(FoldersOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public FoldersOneSecurity security;
    public FoldersOneRequest withSecurity(FoldersOneSecurity security) {
        this.security = security;
        return this;
    }
}