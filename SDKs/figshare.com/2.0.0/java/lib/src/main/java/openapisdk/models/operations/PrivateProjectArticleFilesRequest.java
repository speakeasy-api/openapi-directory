package openapisdk.models.operations;



public class PrivateProjectArticleFilesRequest {
    public PrivateProjectArticleFilesPathParams pathParams;
    public PrivateProjectArticleFilesRequest withPathParams(PrivateProjectArticleFilesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateProjectArticleFilesSecurity security;
    public PrivateProjectArticleFilesRequest withSecurity(PrivateProjectArticleFilesSecurity security) {
        this.security = security;
        return this;
    }
}