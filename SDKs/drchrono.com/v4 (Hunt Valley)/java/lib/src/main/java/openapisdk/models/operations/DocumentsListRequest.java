package openapisdk.models.operations;



public class DocumentsListRequest {
    public DocumentsListQueryParams queryParams;
    public DocumentsListRequest withQueryParams(DocumentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DocumentsListSecurity security;
    public DocumentsListRequest withSecurity(DocumentsListSecurity security) {
        this.security = security;
        return this;
    }
}