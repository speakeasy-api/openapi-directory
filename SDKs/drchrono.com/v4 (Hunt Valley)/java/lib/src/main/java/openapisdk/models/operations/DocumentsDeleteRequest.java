package openapisdk.models.operations;



public class DocumentsDeleteRequest {
    public DocumentsDeletePathParams pathParams;
    public DocumentsDeleteRequest withPathParams(DocumentsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DocumentsDeleteQueryParams queryParams;
    public DocumentsDeleteRequest withQueryParams(DocumentsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DocumentsDeleteSecurity security;
    public DocumentsDeleteRequest withSecurity(DocumentsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}