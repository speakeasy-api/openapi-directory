package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLogStreamRequest {
    public CreateLogStreamHeaders headers;
    public CreateLogStreamRequest withHeaders(CreateLogStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLogStreamRequest request;
    public CreateLogStreamRequest withRequest(openapisdk.models.shared.CreateLogStreamRequest request) {
        this.request = request;
        return this;
    }
}