package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPartitionRequest {
    public GetPartitionHeaders headers;
    public GetPartitionRequest withHeaders(GetPartitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPartitionRequest request;
    public GetPartitionRequest withRequest(openapisdk.models.shared.GetPartitionRequest request) {
        this.request = request;
        return this;
    }
}