package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePlayerSessionRequest {
    public CreatePlayerSessionHeaders headers;
    public CreatePlayerSessionRequest withHeaders(CreatePlayerSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePlayerSessionInput request;
    public CreatePlayerSessionRequest withRequest(openapisdk.models.shared.CreatePlayerSessionInput request) {
        this.request = request;
        return this;
    }
}