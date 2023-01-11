package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGameSessionRequest {
    public CreateGameSessionHeaders headers;
    public CreateGameSessionRequest withHeaders(CreateGameSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateGameSessionInput request;
    public CreateGameSessionRequest withRequest(openapisdk.models.shared.CreateGameSessionInput request) {
        this.request = request;
        return this;
    }
}