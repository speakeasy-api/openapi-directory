package openapisdk.models.operations;



public class DatabaseGetCollectionRequest {
    public DatabaseGetCollectionPathParams pathParams;
    public DatabaseGetCollectionRequest withPathParams(DatabaseGetCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatabaseGetCollectionSecurity security;
    public DatabaseGetCollectionRequest withSecurity(DatabaseGetCollectionSecurity security) {
        this.security = security;
        return this;
    }
}