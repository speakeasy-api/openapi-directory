package openapisdk.models.operations;



public class PrivateArticlePublishRequest {
    public PrivateArticlePublishPathParams pathParams;
    public PrivateArticlePublishRequest withPathParams(PrivateArticlePublishPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateArticlePublishSecurity security;
    public PrivateArticlePublishRequest withSecurity(PrivateArticlePublishSecurity security) {
        this.security = security;
        return this;
    }
}