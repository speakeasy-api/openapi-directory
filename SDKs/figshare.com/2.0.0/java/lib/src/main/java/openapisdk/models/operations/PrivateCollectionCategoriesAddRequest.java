package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionCategoriesAddRequest {
    public PrivateCollectionCategoriesAddPathParams pathParams;
    public PrivateCollectionCategoriesAddRequest withPathParams(PrivateCollectionCategoriesAddPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CategoriesCreator request;
    public PrivateCollectionCategoriesAddRequest withRequest(openapisdk.models.shared.CategoriesCreator request) {
        this.request = request;
        return this;
    }
    public PrivateCollectionCategoriesAddSecurity security;
    public PrivateCollectionCategoriesAddRequest withSecurity(PrivateCollectionCategoriesAddSecurity security) {
        this.security = security;
        return this;
    }
}