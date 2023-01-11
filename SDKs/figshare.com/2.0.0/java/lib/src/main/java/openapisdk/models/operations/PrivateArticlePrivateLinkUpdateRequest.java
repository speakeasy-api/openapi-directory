package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticlePrivateLinkUpdateRequest {
    public PrivateArticlePrivateLinkUpdatePathParams pathParams;
    public PrivateArticlePrivateLinkUpdateRequest withPathParams(PrivateArticlePrivateLinkUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PrivateLinkCreator request;
    public PrivateArticlePrivateLinkUpdateRequest withRequest(openapisdk.models.shared.PrivateLinkCreator request) {
        this.request = request;
        return this;
    }
    public PrivateArticlePrivateLinkUpdateSecurity security;
    public PrivateArticlePrivateLinkUpdateRequest withSecurity(PrivateArticlePrivateLinkUpdateSecurity security) {
        this.security = security;
        return this;
    }
}