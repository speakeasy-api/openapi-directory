package openapisdk.models.operations;



public class DatabaseGetDocumentRequest {
    public DatabaseGetDocumentPathParams pathParams;
    public DatabaseGetDocumentRequest withPathParams(DatabaseGetDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatabaseGetDocumentSecurity security;
    public DatabaseGetDocumentRequest withSecurity(DatabaseGetDocumentSecurity security) {
        this.security = security;
        return this;
    }
}