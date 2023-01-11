package openapisdk.models.operations;



public class PrivateCollectionsListRequest {
    public PrivateCollectionsListQueryParams queryParams;
    public PrivateCollectionsListRequest withQueryParams(PrivateCollectionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PrivateCollectionsListSecurity security;
    public PrivateCollectionsListRequest withSecurity(PrivateCollectionsListSecurity security) {
        this.security = security;
        return this;
    }
}