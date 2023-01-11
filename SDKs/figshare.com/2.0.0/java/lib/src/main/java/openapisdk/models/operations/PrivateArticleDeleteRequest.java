package openapisdk.models.operations;



public class PrivateArticleDeleteRequest {
    public PrivateArticleDeletePathParams pathParams;
    public PrivateArticleDeleteRequest withPathParams(PrivateArticleDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateArticleDeleteSecurity security;
    public PrivateArticleDeleteRequest withSecurity(PrivateArticleDeleteSecurity security) {
        this.security = security;
        return this;
    }
}