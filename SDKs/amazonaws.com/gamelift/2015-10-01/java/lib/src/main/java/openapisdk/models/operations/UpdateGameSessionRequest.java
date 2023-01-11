package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGameSessionRequest {
    public UpdateGameSessionHeaders headers;
    public UpdateGameSessionRequest withHeaders(UpdateGameSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateGameSessionInput request;
    public UpdateGameSessionRequest withRequest(openapisdk.models.shared.UpdateGameSessionInput request) {
        this.request = request;
        return this;
    }
}