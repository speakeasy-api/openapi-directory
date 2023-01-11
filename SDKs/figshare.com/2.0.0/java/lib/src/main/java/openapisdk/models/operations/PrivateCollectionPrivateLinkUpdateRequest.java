package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionPrivateLinkUpdateRequest {
    public PrivateCollectionPrivateLinkUpdatePathParams pathParams;
    public PrivateCollectionPrivateLinkUpdateRequest withPathParams(PrivateCollectionPrivateLinkUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionPrivateLinkCreator request;
    public PrivateCollectionPrivateLinkUpdateRequest withRequest(openapisdk.models.shared.CollectionPrivateLinkCreator request) {
        this.request = request;
        return this;
    }
    public PrivateCollectionPrivateLinkUpdateSecurity security;
    public PrivateCollectionPrivateLinkUpdateRequest withSecurity(PrivateCollectionPrivateLinkUpdateSecurity security) {
        this.security = security;
        return this;
    }
}