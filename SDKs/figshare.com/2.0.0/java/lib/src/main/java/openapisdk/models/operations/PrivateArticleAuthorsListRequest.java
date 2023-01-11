package openapisdk.models.operations;



public class PrivateArticleAuthorsListRequest {
    public PrivateArticleAuthorsListPathParams pathParams;
    public PrivateArticleAuthorsListRequest withPathParams(PrivateArticleAuthorsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateArticleAuthorsListSecurity security;
    public PrivateArticleAuthorsListRequest withSecurity(PrivateArticleAuthorsListSecurity security) {
        this.security = security;
        return this;
    }
}