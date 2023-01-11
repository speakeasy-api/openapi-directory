package openapisdk.models.operations;



public class ListCollectionsRequest {
    public ListCollectionsQueryParams queryParams;
    public ListCollectionsRequest withQueryParams(ListCollectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCollectionsSecurity security;
    public ListCollectionsRequest withSecurity(ListCollectionsSecurity security) {
        this.security = security;
        return this;
    }
}