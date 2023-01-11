package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGameSessionQueueRequest {
    public UpdateGameSessionQueueHeaders headers;
    public UpdateGameSessionQueueRequest withHeaders(UpdateGameSessionQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateGameSessionQueueInput request;
    public UpdateGameSessionQueueRequest withRequest(openapisdk.models.shared.UpdateGameSessionQueueInput request) {
        this.request = request;
        return this;
    }
}