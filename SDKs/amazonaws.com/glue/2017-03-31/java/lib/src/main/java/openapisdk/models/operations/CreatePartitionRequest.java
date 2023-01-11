package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePartitionRequest {
    public CreatePartitionHeaders headers;
    public CreatePartitionRequest withHeaders(CreatePartitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePartitionRequest request;
    public CreatePartitionRequest withRequest(openapisdk.models.shared.CreatePartitionRequest request) {
        this.request = request;
        return this;
    }
}