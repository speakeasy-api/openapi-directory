package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGameSessionQueueRequest {
    public DeleteGameSessionQueueHeaders headers;
    public DeleteGameSessionQueueRequest withHeaders(DeleteGameSessionQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteGameSessionQueueInput request;
    public DeleteGameSessionQueueRequest withRequest(openapisdk.models.shared.DeleteGameSessionQueueInput request) {
        this.request = request;
        return this;
    }
}