package openapisdk.models.operations;



public class DatabaseDeleteCollectionRequest {
    public DatabaseDeleteCollectionPathParams pathParams;
    public DatabaseDeleteCollectionRequest withPathParams(DatabaseDeleteCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatabaseDeleteCollectionSecurity security;
    public DatabaseDeleteCollectionRequest withSecurity(DatabaseDeleteCollectionSecurity security) {
        this.security = security;
        return this;
    }
}