package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePartitionIndexRequest {
    public CreatePartitionIndexHeaders headers;
    public CreatePartitionIndexRequest withHeaders(CreatePartitionIndexHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePartitionIndexRequest request;
    public CreatePartitionIndexRequest withRequest(openapisdk.models.shared.CreatePartitionIndexRequest request) {
        this.request = request;
        return this;
    }
}