package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePartitionIndexRequest {
    public DeletePartitionIndexHeaders headers;
    public DeletePartitionIndexRequest withHeaders(DeletePartitionIndexHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePartitionIndexRequest request;
    public DeletePartitionIndexRequest withRequest(openapisdk.models.shared.DeletePartitionIndexRequest request) {
        this.request = request;
        return this;
    }
}