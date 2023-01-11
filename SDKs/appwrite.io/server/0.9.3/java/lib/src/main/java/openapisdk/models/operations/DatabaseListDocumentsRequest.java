package openapisdk.models.operations;



public class DatabaseListDocumentsRequest {
    public DatabaseListDocumentsPathParams pathParams;
    public DatabaseListDocumentsRequest withPathParams(DatabaseListDocumentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatabaseListDocumentsQueryParams queryParams;
    public DatabaseListDocumentsRequest withQueryParams(DatabaseListDocumentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatabaseListDocumentsSecurity security;
    public DatabaseListDocumentsRequest withSecurity(DatabaseListDocumentsSecurity security) {
        this.security = security;
        return this;
    }
}