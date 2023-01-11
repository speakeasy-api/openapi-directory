package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionArticlesReplaceRequest {
    public PrivateCollectionArticlesReplacePathParams pathParams;
    public PrivateCollectionArticlesReplaceRequest withPathParams(PrivateCollectionArticlesReplacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ArticlesCreator request;
    public PrivateCollectionArticlesReplaceRequest withRequest(openapisdk.models.shared.ArticlesCreator request) {
        this.request = request;
        return this;
    }
    public PrivateCollectionArticlesReplaceSecurity security;
    public PrivateCollectionArticlesReplaceRequest withSecurity(PrivateCollectionArticlesReplaceSecurity security) {
        this.security = security;
        return this;
    }
}