package openapisdk.models.operations;



public class DocumentsReadRequest {
    public DocumentsReadPathParams pathParams;
    public DocumentsReadRequest withPathParams(DocumentsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DocumentsReadQueryParams queryParams;
    public DocumentsReadRequest withQueryParams(DocumentsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DocumentsReadSecurity security;
    public DocumentsReadRequest withSecurity(DocumentsReadSecurity security) {
        this.security = security;
        return this;
    }
}