package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticlesSearchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PrivateArticleSearch request;
    public PrivateArticlesSearchRequest withRequest(openapisdk.models.shared.PrivateArticleSearch request) {
        this.request = request;
        return this;
    }
    public PrivateArticlesSearchSecurity security;
    public PrivateArticlesSearchRequest withSecurity(PrivateArticlesSearchSecurity security) {
        this.security = security;
        return this;
    }
}