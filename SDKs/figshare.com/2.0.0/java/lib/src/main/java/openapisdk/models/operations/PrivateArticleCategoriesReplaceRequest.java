package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleCategoriesReplaceRequest {
    public PrivateArticleCategoriesReplacePathParams pathParams;
    public PrivateArticleCategoriesReplaceRequest withPathParams(PrivateArticleCategoriesReplacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CategoriesCreator request;
    public PrivateArticleCategoriesReplaceRequest withRequest(openapisdk.models.shared.CategoriesCreator request) {
        this.request = request;
        return this;
    }
    public PrivateArticleCategoriesReplaceSecurity security;
    public PrivateArticleCategoriesReplaceRequest withSecurity(PrivateArticleCategoriesReplaceSecurity security) {
        this.security = security;
        return this;
    }
}