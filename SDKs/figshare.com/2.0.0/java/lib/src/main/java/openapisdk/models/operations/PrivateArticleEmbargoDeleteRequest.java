package openapisdk.models.operations;



public class PrivateArticleEmbargoDeleteRequest {
    public PrivateArticleEmbargoDeletePathParams pathParams;
    public PrivateArticleEmbargoDeleteRequest withPathParams(PrivateArticleEmbargoDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateArticleEmbargoDeleteSecurity security;
    public PrivateArticleEmbargoDeleteRequest withSecurity(PrivateArticleEmbargoDeleteSecurity security) {
        this.security = security;
        return this;
    }
}