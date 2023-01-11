package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleUpdateRequest {
    public PrivateArticleUpdatePathParams pathParams;
    public PrivateArticleUpdateRequest withPathParams(PrivateArticleUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ArticleUpdate request;
    public PrivateArticleUpdateRequest withRequest(openapisdk.models.shared.ArticleUpdate request) {
        this.request = request;
        return this;
    }
    public PrivateArticleUpdateSecurity security;
    public PrivateArticleUpdateRequest withSecurity(PrivateArticleUpdateSecurity security) {
        this.security = security;
        return this;
    }
}