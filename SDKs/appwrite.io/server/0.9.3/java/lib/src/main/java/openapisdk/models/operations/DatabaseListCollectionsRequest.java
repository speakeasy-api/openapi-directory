package openapisdk.models.operations;



public class DatabaseListCollectionsRequest {
    public DatabaseListCollectionsQueryParams queryParams;
    public DatabaseListCollectionsRequest withQueryParams(DatabaseListCollectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatabaseListCollectionsSecurity security;
    public DatabaseListCollectionsRequest withSecurity(DatabaseListCollectionsSecurity security) {
        this.security = security;
        return this;
    }
}