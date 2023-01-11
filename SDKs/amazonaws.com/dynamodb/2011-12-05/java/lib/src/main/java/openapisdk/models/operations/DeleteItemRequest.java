package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteItemRequest {
    public DeleteItemHeaders headers;
    public DeleteItemRequest withHeaders(DeleteItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteItemInput request;
    public DeleteItemRequest withRequest(openapisdk.models.shared.DeleteItemInput request) {
        this.request = request;
        return this;
    }
}