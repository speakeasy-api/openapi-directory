package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStreamRequest {
    public DeleteStreamHeaders headers;
    public DeleteStreamRequest withHeaders(DeleteStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteStreamInput request;
    public DeleteStreamRequest withRequest(openapisdk.models.shared.DeleteStreamInput request) {
        this.request = request;
        return this;
    }
}