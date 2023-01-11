package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCollectionRequest {
    public CreateCollectionHeaders headers;
    public CreateCollectionRequest withHeaders(CreateCollectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCollectionRequest request;
    public CreateCollectionRequest withRequest(openapisdk.models.shared.CreateCollectionRequest request) {
        this.request = request;
        return this;
    }
}