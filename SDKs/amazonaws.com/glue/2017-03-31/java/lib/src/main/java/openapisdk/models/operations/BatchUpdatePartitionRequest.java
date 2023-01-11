package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchUpdatePartitionRequest {
    public BatchUpdatePartitionHeaders headers;
    public BatchUpdatePartitionRequest withHeaders(BatchUpdatePartitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchUpdatePartitionRequest request;
    public BatchUpdatePartitionRequest withRequest(openapisdk.models.shared.BatchUpdatePartitionRequest request) {
        this.request = request;
        return this;
    }
}