package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionCreate request;
    public PrivateCollectionCreateRequest withRequest(openapisdk.models.shared.CollectionCreate request) {
        this.request = request;
        return this;
    }
    public PrivateCollectionCreateSecurity security;
    public PrivateCollectionCreateRequest withSecurity(PrivateCollectionCreateSecurity security) {
        this.security = security;
        return this;
    }
}