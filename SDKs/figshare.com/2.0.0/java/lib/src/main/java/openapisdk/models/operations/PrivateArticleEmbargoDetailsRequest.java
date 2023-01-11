package openapisdk.models.operations;



public class PrivateArticleEmbargoDetailsRequest {
    public PrivateArticleEmbargoDetailsPathParams pathParams;
    public PrivateArticleEmbargoDetailsRequest withPathParams(PrivateArticleEmbargoDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateArticleEmbargoDetailsSecurity security;
    public PrivateArticleEmbargoDetailsRequest withSecurity(PrivateArticleEmbargoDetailsSecurity security) {
        this.security = security;
        return this;
    }
}