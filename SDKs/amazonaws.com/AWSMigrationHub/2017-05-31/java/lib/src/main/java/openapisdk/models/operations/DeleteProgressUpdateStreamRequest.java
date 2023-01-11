package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProgressUpdateStreamRequest {
    public DeleteProgressUpdateStreamHeaders headers;
    public DeleteProgressUpdateStreamRequest withHeaders(DeleteProgressUpdateStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteProgressUpdateStreamRequest request;
    public DeleteProgressUpdateStreamRequest withRequest(openapisdk.models.shared.DeleteProgressUpdateStreamRequest request) {
        this.request = request;
        return this;
    }
}