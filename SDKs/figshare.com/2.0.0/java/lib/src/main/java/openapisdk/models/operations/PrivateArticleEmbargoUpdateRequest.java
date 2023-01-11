package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleEmbargoUpdateRequest {
    public PrivateArticleEmbargoUpdatePathParams pathParams;
    public PrivateArticleEmbargoUpdateRequest withPathParams(PrivateArticleEmbargoUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ArticleEmbargoUpdater request;
    public PrivateArticleEmbargoUpdateRequest withRequest(openapisdk.models.shared.ArticleEmbargoUpdater request) {
        this.request = request;
        return this;
    }
    public PrivateArticleEmbargoUpdateSecurity security;
    public PrivateArticleEmbargoUpdateRequest withSecurity(PrivateArticleEmbargoUpdateSecurity security) {
        this.security = security;
        return this;
    }
}