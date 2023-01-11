package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionPrivateLinkCreateRequest {
    public PrivateCollectionPrivateLinkCreatePathParams pathParams;
    public PrivateCollectionPrivateLinkCreateRequest withPathParams(PrivateCollectionPrivateLinkCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionPrivateLinkCreator request;
    public PrivateCollectionPrivateLinkCreateRequest withRequest(openapisdk.models.shared.CollectionPrivateLinkCreator request) {
        this.request = request;
        return this;
    }
    public PrivateCollectionPrivateLinkCreateSecurity security;
    public PrivateCollectionPrivateLinkCreateRequest withSecurity(PrivateCollectionPrivateLinkCreateSecurity security) {
        this.security = security;
        return this;
    }
}