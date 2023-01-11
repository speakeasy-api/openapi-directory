package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLogStreamRequest {
    public DeleteLogStreamHeaders headers;
    public DeleteLogStreamRequest withHeaders(DeleteLogStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLogStreamRequest request;
    public DeleteLogStreamRequest withRequest(openapisdk.models.shared.DeleteLogStreamRequest request) {
        this.request = request;
        return this;
    }
}