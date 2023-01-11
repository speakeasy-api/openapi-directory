package openapisdk.models.operations;



public class PrivateProjectArticleFileRequest {
    public PrivateProjectArticleFilePathParams pathParams;
    public PrivateProjectArticleFileRequest withPathParams(PrivateProjectArticleFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateProjectArticleFileSecurity security;
    public PrivateProjectArticleFileRequest withSecurity(PrivateProjectArticleFileSecurity security) {
        this.security = security;
        return this;
    }
}