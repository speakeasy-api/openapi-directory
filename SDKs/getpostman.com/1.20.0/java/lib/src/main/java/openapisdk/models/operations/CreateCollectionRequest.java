package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCollectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCollectionRequestBody request;
    public CreateCollectionRequest withRequest(CreateCollectionRequestBody request) {
        this.request = request;
        return this;
    }
}