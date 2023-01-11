package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditCollectionRequest {
    public EditCollectionPathParams pathParams;
    public EditCollectionRequest withPathParams(EditCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionModification request;
    public EditCollectionRequest withRequest(openapisdk.models.shared.CollectionModification request) {
        this.request = request;
        return this;
    }
    public EditCollectionSecurity security;
    public EditCollectionRequest withSecurity(EditCollectionSecurity security) {
        this.security = security;
        return this;
    }
}