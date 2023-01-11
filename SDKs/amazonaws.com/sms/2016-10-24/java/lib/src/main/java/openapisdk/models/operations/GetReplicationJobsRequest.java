package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReplicationJobsRequest {
    public GetReplicationJobsQueryParams queryParams;
    public GetReplicationJobsRequest withQueryParams(GetReplicationJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetReplicationJobsHeaders headers;
    public GetReplicationJobsRequest withHeaders(GetReplicationJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetReplicationJobsRequest request;
    public GetReplicationJobsRequest withRequest(openapisdk.models.shared.GetReplicationJobsRequest request) {
        this.request = request;
        return this;
    }
}