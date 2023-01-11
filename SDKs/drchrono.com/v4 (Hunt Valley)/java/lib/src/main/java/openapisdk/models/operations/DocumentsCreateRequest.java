package openapisdk.models.operations;



public class DocumentsCreateRequest {
    public DocumentsCreateQueryParams queryParams;
    public DocumentsCreateRequest withQueryParams(DocumentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DocumentsCreateSecurity security;
    public DocumentsCreateRequest withSecurity(DocumentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}