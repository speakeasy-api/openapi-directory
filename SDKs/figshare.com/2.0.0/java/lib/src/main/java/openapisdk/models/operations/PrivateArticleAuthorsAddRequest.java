package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleAuthorsAddRequest {
    public PrivateArticleAuthorsAddPathParams pathParams;
    public PrivateArticleAuthorsAddRequest withPathParams(PrivateArticleAuthorsAddPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AuthorsCreator request;
    public PrivateArticleAuthorsAddRequest withRequest(openapisdk.models.shared.AuthorsCreator request) {
        this.request = request;
        return this;
    }
    public PrivateArticleAuthorsAddSecurity security;
    public PrivateArticleAuthorsAddRequest withSecurity(PrivateArticleAuthorsAddSecurity security) {
        this.security = security;
        return this;
    }
}