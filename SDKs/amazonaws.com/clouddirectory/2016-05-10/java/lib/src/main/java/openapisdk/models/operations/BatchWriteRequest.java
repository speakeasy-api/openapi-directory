package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchWriteRequest {
    public BatchWriteHeaders headers;
    public BatchWriteRequest withHeaders(BatchWriteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchWriteRequestBody request;
    public BatchWriteRequest withRequest(BatchWriteRequestBody request) {
        this.request = request;
        return this;
    }
}