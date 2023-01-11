package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeletePartitionRequest {
    public BatchDeletePartitionHeaders headers;
    public BatchDeletePartitionRequest withHeaders(BatchDeletePartitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDeletePartitionRequest request;
    public BatchDeletePartitionRequest withRequest(openapisdk.models.shared.BatchDeletePartitionRequest request) {
        this.request = request;
        return this;
    }
}