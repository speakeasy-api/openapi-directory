package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionUpdateRequest {
    public PrivateCollectionUpdatePathParams pathParams;
    public PrivateCollectionUpdateRequest withPathParams(PrivateCollectionUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionUpdate request;
    public PrivateCollectionUpdateRequest withRequest(openapisdk.models.shared.CollectionUpdate request) {
        this.request = request;
        return this;
    }
    public PrivateCollectionUpdateSecurity security;
    public PrivateCollectionUpdateRequest withSecurity(PrivateCollectionUpdateSecurity security) {
        this.security = security;
        return this;
    }
}