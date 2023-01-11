package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReplicationRunsRequest {
    public GetReplicationRunsQueryParams queryParams;
    public GetReplicationRunsRequest withQueryParams(GetReplicationRunsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetReplicationRunsHeaders headers;
    public GetReplicationRunsRequest withHeaders(GetReplicationRunsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetReplicationRunsRequest request;
    public GetReplicationRunsRequest withRequest(openapisdk.models.shared.GetReplicationRunsRequest request) {
        this.request = request;
        return this;
    }
}