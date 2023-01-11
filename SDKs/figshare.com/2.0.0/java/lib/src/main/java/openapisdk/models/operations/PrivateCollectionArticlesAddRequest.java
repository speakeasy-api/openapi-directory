package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionArticlesAddRequest {
    public PrivateCollectionArticlesAddPathParams pathParams;
    public PrivateCollectionArticlesAddRequest withPathParams(PrivateCollectionArticlesAddPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ArticlesCreator request;
    public PrivateCollectionArticlesAddRequest withRequest(openapisdk.models.shared.ArticlesCreator request) {
        this.request = request;
        return this;
    }
    public PrivateCollectionArticlesAddSecurity security;
    public PrivateCollectionArticlesAddRequest withSecurity(PrivateCollectionArticlesAddSecurity security) {
        this.security = security;
        return this;
    }
}