package openapisdk.models.operations;



public class PrivateArticleDetailsRequest {
    public PrivateArticleDetailsPathParams pathParams;
    public PrivateArticleDetailsRequest withPathParams(PrivateArticleDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateArticleDetailsSecurity security;
    public PrivateArticleDetailsRequest withSecurity(PrivateArticleDetailsSecurity security) {
        this.security = security;
        return this;
    }
}