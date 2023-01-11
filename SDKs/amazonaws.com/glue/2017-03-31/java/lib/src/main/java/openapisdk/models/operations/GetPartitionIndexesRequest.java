package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPartitionIndexesRequest {
    public GetPartitionIndexesQueryParams queryParams;
    public GetPartitionIndexesRequest withQueryParams(GetPartitionIndexesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPartitionIndexesHeaders headers;
    public GetPartitionIndexesRequest withHeaders(GetPartitionIndexesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPartitionIndexesRequest request;
    public GetPartitionIndexesRequest withRequest(openapisdk.models.shared.GetPartitionIndexesRequest request) {
        this.request = request;
        return this;
    }
}