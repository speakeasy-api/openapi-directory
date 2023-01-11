package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetPartitionRequest {
    public BatchGetPartitionHeaders headers;
    public BatchGetPartitionRequest withHeaders(BatchGetPartitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetPartitionRequest request;
    public BatchGetPartitionRequest withRequest(openapisdk.models.shared.BatchGetPartitionRequest request) {
        this.request = request;
        return this;
    }
}