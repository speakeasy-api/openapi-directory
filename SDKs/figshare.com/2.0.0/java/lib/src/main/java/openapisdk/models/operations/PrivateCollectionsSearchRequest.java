package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionsSearchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PrivateCollectionSearch request;
    public PrivateCollectionsSearchRequest withRequest(openapisdk.models.shared.PrivateCollectionSearch request) {
        this.request = request;
        return this;
    }
    public PrivateCollectionsSearchSecurity security;
    public PrivateCollectionsSearchRequest withSecurity(PrivateCollectionsSearchSecurity security) {
        this.security = security;
        return this;
    }
}