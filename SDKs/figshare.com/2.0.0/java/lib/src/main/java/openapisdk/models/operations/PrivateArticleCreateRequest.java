package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ArticleCreate request;
    public PrivateArticleCreateRequest withRequest(openapisdk.models.shared.ArticleCreate request) {
        this.request = request;
        return this;
    }
    public PrivateArticleCreateSecurity security;
    public PrivateArticleCreateRequest withSecurity(PrivateArticleCreateSecurity security) {
        this.security = security;
        return this;
    }
}