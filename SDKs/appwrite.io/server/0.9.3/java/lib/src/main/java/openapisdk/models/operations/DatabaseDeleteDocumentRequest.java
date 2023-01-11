package openapisdk.models.operations;



public class DatabaseDeleteDocumentRequest {
    public DatabaseDeleteDocumentPathParams pathParams;
    public DatabaseDeleteDocumentRequest withPathParams(DatabaseDeleteDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatabaseDeleteDocumentSecurity security;
    public DatabaseDeleteDocumentRequest withSecurity(DatabaseDeleteDocumentSecurity security) {
        this.security = security;
        return this;
    }
}