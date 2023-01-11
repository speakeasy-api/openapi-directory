package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateResourceCollectionRequest {
    public UpdateResourceCollectionHeaders headers;
    public UpdateResourceCollectionRequest withHeaders(UpdateResourceCollectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateResourceCollectionRequestBody request;
    public UpdateResourceCollectionRequest withRequest(UpdateResourceCollectionRequestBody request) {
        this.request = request;
        return this;
    }
}