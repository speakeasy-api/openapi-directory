package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchCreatePartitionRequest {
    public BatchCreatePartitionHeaders headers;
    public BatchCreatePartitionRequest withHeaders(BatchCreatePartitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchCreatePartitionRequest request;
    public BatchCreatePartitionRequest withRequest(openapisdk.models.shared.BatchCreatePartitionRequest request) {
        this.request = request;
        return this;
    }
}