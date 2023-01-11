package openapisdk.models.operations;



public class DocumentsPartialUpdateRequest {
    public DocumentsPartialUpdatePathParams pathParams;
    public DocumentsPartialUpdateRequest withPathParams(DocumentsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DocumentsPartialUpdateQueryParams queryParams;
    public DocumentsPartialUpdateRequest withQueryParams(DocumentsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DocumentsPartialUpdateSecurity security;
    public DocumentsPartialUpdateRequest withSecurity(DocumentsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}