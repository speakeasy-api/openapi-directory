package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGameServerRequest {
    public UpdateGameServerHeaders headers;
    public UpdateGameServerRequest withHeaders(UpdateGameServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateGameServerInput request;
    public UpdateGameServerRequest withRequest(openapisdk.models.shared.UpdateGameServerInput request) {
        this.request = request;
        return this;
    }
}