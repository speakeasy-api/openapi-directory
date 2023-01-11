package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProgressUpdateStreamRequest {
    public CreateProgressUpdateStreamHeaders headers;
    public CreateProgressUpdateStreamRequest withHeaders(CreateProgressUpdateStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateProgressUpdateStreamRequest request;
    public CreateProgressUpdateStreamRequest withRequest(openapisdk.models.shared.CreateProgressUpdateStreamRequest request) {
        this.request = request;
        return this;
    }
}