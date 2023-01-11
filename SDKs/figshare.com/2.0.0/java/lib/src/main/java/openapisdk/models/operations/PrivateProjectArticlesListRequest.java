package openapisdk.models.operations;



public class PrivateProjectArticlesListRequest {
    public PrivateProjectArticlesListPathParams pathParams;
    public PrivateProjectArticlesListRequest withPathParams(PrivateProjectArticlesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateProjectArticlesListQueryParams queryParams;
    public PrivateProjectArticlesListRequest withQueryParams(PrivateProjectArticlesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PrivateProjectArticlesListSecurity security;
    public PrivateProjectArticlesListRequest withSecurity(PrivateProjectArticlesListSecurity security) {
        this.security = security;
        return this;
    }
}