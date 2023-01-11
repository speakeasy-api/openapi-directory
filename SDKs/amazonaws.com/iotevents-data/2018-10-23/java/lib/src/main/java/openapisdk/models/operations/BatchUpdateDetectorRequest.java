package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchUpdateDetectorRequest {
    public BatchUpdateDetectorHeaders headers;
    public BatchUpdateDetectorRequest withHeaders(BatchUpdateDetectorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchUpdateDetectorRequestBody request;
    public BatchUpdateDetectorRequest withRequest(BatchUpdateDetectorRequestBody request) {
        this.request = request;
        return this;
    }
}