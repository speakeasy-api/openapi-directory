package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleCategoriesAddRequest {
    public PrivateArticleCategoriesAddPathParams pathParams;
    public PrivateArticleCategoriesAddRequest withPathParams(PrivateArticleCategoriesAddPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CategoriesCreator request;
    public PrivateArticleCategoriesAddRequest withRequest(openapisdk.models.shared.CategoriesCreator request) {
        this.request = request;
        return this;
    }
    public PrivateArticleCategoriesAddSecurity security;
    public PrivateArticleCategoriesAddRequest withSecurity(PrivateArticleCategoriesAddSecurity security) {
        this.security = security;
        return this;
    }
}