package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCollectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionCreation request;
    public CreateCollectionRequest withRequest(openapisdk.models.shared.CollectionCreation request) {
        this.request = request;
        return this;
    }
    public CreateCollectionSecurity security;
    public CreateCollectionRequest withSecurity(CreateCollectionSecurity security) {
        this.security = security;
        return this;
    }
}