package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePartitionRequest {
    public DeletePartitionHeaders headers;
    public DeletePartitionRequest withHeaders(DeletePartitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePartitionRequest request;
    public DeletePartitionRequest withRequest(openapisdk.models.shared.DeletePartitionRequest request) {
        this.request = request;
        return this;
    }
}