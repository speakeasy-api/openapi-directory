package openapisdk.models.operations;



public class PrivateArticleFileDeleteRequest {
    public PrivateArticleFileDeletePathParams pathParams;
    public PrivateArticleFileDeleteRequest withPathParams(PrivateArticleFileDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateArticleFileDeleteSecurity security;
    public PrivateArticleFileDeleteRequest withSecurity(PrivateArticleFileDeleteSecurity security) {
        this.security = security;
        return this;
    }
}