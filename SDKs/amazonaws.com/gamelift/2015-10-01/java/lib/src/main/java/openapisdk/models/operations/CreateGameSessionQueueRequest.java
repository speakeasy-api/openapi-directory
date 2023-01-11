package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGameSessionQueueRequest {
    public CreateGameSessionQueueHeaders headers;
    public CreateGameSessionQueueRequest withHeaders(CreateGameSessionQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateGameSessionQueueInput request;
    public CreateGameSessionQueueRequest withRequest(openapisdk.models.shared.CreateGameSessionQueueInput request) {
        this.request = request;
        return this;
    }
}