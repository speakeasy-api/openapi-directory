package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCollectionRequest {
    public DeleteCollectionHeaders headers;
    public DeleteCollectionRequest withHeaders(DeleteCollectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCollectionRequest request;
    public DeleteCollectionRequest withRequest(openapisdk.models.shared.DeleteCollectionRequest request) {
        this.request = request;
        return this;
    }
}