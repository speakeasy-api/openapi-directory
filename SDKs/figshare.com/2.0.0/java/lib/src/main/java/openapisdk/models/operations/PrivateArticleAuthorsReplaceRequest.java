package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleAuthorsReplaceRequest {
    public PrivateArticleAuthorsReplacePathParams pathParams;
    public PrivateArticleAuthorsReplaceRequest withPathParams(PrivateArticleAuthorsReplacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AuthorsCreator request;
    public PrivateArticleAuthorsReplaceRequest withRequest(openapisdk.models.shared.AuthorsCreator request) {
        this.request = request;
        return this;
    }
    public PrivateArticleAuthorsReplaceSecurity security;
    public PrivateArticleAuthorsReplaceRequest withSecurity(PrivateArticleAuthorsReplaceSecurity security) {
        this.security = security;
        return this;
    }
}