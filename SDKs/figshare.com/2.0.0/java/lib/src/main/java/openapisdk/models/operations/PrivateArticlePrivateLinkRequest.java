package openapisdk.models.operations;



public class PrivateArticlePrivateLinkRequest {
    public PrivateArticlePrivateLinkPathParams pathParams;
    public PrivateArticlePrivateLinkRequest withPathParams(PrivateArticlePrivateLinkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateArticlePrivateLinkSecurity security;
    public PrivateArticlePrivateLinkRequest withSecurity(PrivateArticlePrivateLinkSecurity security) {
        this.security = security;
        return this;
    }
}