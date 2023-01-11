package openapisdk.models.operations;



public class PrivateArticleFileRequest {
    public PrivateArticleFilePathParams pathParams;
    public PrivateArticleFileRequest withPathParams(PrivateArticleFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateArticleFileSecurity security;
    public PrivateArticleFileRequest withSecurity(PrivateArticleFileSecurity security) {
        this.security = security;
        return this;
    }
}