package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionCategoriesReplaceRequest {
    public PrivateCollectionCategoriesReplacePathParams pathParams;
    public PrivateCollectionCategoriesReplaceRequest withPathParams(PrivateCollectionCategoriesReplacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CategoriesCreator request;
    public PrivateCollectionCategoriesReplaceRequest withRequest(openapisdk.models.shared.CategoriesCreator request) {
        this.request = request;
        return this;
    }
    public PrivateCollectionCategoriesReplaceSecurity security;
    public PrivateCollectionCategoriesReplaceRequest withSecurity(PrivateCollectionCategoriesReplaceSecurity security) {
        this.security = security;
        return this;
    }
}