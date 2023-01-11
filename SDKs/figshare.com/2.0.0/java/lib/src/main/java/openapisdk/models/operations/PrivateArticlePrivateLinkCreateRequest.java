package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticlePrivateLinkCreateRequest {
    public PrivateArticlePrivateLinkCreatePathParams pathParams;
    public PrivateArticlePrivateLinkCreateRequest withPathParams(PrivateArticlePrivateLinkCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PrivateLinkCreator request;
    public PrivateArticlePrivateLinkCreateRequest withRequest(openapisdk.models.shared.PrivateLinkCreator request) {
        this.request = request;
        return this;
    }
    public PrivateArticlePrivateLinkCreateSecurity security;
    public PrivateArticlePrivateLinkCreateRequest withSecurity(PrivateArticlePrivateLinkCreateSecurity security) {
        this.security = security;
        return this;
    }
}