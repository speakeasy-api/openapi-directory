package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchReadRequest {
    public BatchReadHeaders headers;
    public BatchReadRequest withHeaders(BatchReadHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchReadRequestBody request;
    public BatchReadRequest withRequest(BatchReadRequestBody request) {
        this.request = request;
        return this;
    }
}