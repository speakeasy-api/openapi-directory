package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsSearchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionSearch request;
    public CollectionsSearchRequest withRequest(openapisdk.models.shared.CollectionSearch request) {
        this.request = request;
        return this;
    }
}