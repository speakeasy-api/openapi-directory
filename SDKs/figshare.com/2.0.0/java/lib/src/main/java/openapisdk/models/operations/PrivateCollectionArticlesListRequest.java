package openapisdk.models.operations;



public class PrivateCollectionArticlesListRequest {
    public PrivateCollectionArticlesListPathParams pathParams;
    public PrivateCollectionArticlesListRequest withPathParams(PrivateCollectionArticlesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateCollectionArticlesListSecurity security;
    public PrivateCollectionArticlesListRequest withSecurity(PrivateCollectionArticlesListSecurity security) {
        this.security = security;
        return this;
    }
}