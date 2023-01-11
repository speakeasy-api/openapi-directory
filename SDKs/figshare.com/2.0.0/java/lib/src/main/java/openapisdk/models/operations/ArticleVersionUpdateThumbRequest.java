package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArticleVersionUpdateThumbRequest {
    public ArticleVersionUpdateThumbPathParams pathParams;
    public ArticleVersionUpdateThumbRequest withPathParams(ArticleVersionUpdateThumbPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FileId request;
    public ArticleVersionUpdateThumbRequest withRequest(openapisdk.models.shared.FileId request) {
        this.request = request;
        return this;
    }
    public ArticleVersionUpdateThumbSecurity security;
    public ArticleVersionUpdateThumbRequest withSecurity(ArticleVersionUpdateThumbSecurity security) {
        this.security = security;
        return this;
    }
}