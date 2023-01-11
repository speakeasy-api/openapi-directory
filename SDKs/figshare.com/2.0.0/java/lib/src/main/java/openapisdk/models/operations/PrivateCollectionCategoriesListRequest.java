package openapisdk.models.operations;



public class PrivateCollectionCategoriesListRequest {
    public PrivateCollectionCategoriesListPathParams pathParams;
    public PrivateCollectionCategoriesListRequest withPathParams(PrivateCollectionCategoriesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateCollectionCategoriesListSecurity security;
    public PrivateCollectionCategoriesListRequest withSecurity(PrivateCollectionCategoriesListSecurity security) {
        this.security = security;
        return this;
    }
}