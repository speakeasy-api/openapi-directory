package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchWriteItemRequest {
    public BatchWriteItemHeaders headers;
    public BatchWriteItemRequest withHeaders(BatchWriteItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchWriteItemInput request;
    public BatchWriteItemRequest withRequest(openapisdk.models.shared.BatchWriteItemInput request) {
        this.request = request;
        return this;
    }
}