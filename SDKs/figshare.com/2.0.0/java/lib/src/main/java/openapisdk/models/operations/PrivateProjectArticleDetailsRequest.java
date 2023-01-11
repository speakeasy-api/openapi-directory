package openapisdk.models.operations;



public class PrivateProjectArticleDetailsRequest {
    public PrivateProjectArticleDetailsPathParams pathParams;
    public PrivateProjectArticleDetailsRequest withPathParams(PrivateProjectArticleDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateProjectArticleDetailsSecurity security;
    public PrivateProjectArticleDetailsRequest withSecurity(PrivateProjectArticleDetailsSecurity security) {
        this.security = security;
        return this;
    }
}