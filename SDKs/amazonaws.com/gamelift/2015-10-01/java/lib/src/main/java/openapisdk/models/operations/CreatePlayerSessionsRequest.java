package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePlayerSessionsRequest {
    public CreatePlayerSessionsHeaders headers;
    public CreatePlayerSessionsRequest withHeaders(CreatePlayerSessionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePlayerSessionsInput request;
    public CreatePlayerSessionsRequest withRequest(openapisdk.models.shared.CreatePlayerSessionsInput request) {
        this.request = request;
        return this;
    }
}