package openapisdk.models.operations;



public class PrivateArticleCategoriesListRequest {
    public PrivateArticleCategoriesListPathParams pathParams;
    public PrivateArticleCategoriesListRequest withPathParams(PrivateArticleCategoriesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateArticleCategoriesListSecurity security;
    public PrivateArticleCategoriesListRequest withSecurity(PrivateArticleCategoriesListSecurity security) {
        this.security = security;
        return this;
    }
}