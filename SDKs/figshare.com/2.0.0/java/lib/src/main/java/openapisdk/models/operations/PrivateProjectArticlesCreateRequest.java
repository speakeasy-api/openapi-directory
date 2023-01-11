package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectArticlesCreateRequest {
    public PrivateProjectArticlesCreatePathParams pathParams;
    public PrivateProjectArticlesCreateRequest withPathParams(PrivateProjectArticlesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateProjectArticlesCreateQueryParams queryParams;
    public PrivateProjectArticlesCreateRequest withQueryParams(PrivateProjectArticlesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ArticleProjectCreate request;
    public PrivateProjectArticlesCreateRequest withRequest(openapisdk.models.shared.ArticleProjectCreate request) {
        this.request = request;
        return this;
    }
    public PrivateProjectArticlesCreateSecurity security;
    public PrivateProjectArticlesCreateRequest withSecurity(PrivateProjectArticlesCreateSecurity security) {
        this.security = security;
        return this;
    }
}