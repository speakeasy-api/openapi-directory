package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePartitionRequest {
    public UpdatePartitionHeaders headers;
    public UpdatePartitionRequest withHeaders(UpdatePartitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePartitionRequest request;
    public UpdatePartitionRequest withRequest(openapisdk.models.shared.UpdatePartitionRequest request) {
        this.request = request;
        return this;
    }
}