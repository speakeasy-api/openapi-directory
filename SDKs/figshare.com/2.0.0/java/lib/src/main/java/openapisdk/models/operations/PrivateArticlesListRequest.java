package openapisdk.models.operations;



public class PrivateArticlesListRequest {
    public PrivateArticlesListQueryParams queryParams;
    public PrivateArticlesListRequest withQueryParams(PrivateArticlesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PrivateArticlesListSecurity security;
    public PrivateArticlesListRequest withSecurity(PrivateArticlesListSecurity security) {
        this.security = security;
        return this;
    }
}