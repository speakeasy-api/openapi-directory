package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobRunsRequest {
    public GetJobRunsQueryParams queryParams;
    public GetJobRunsRequest withQueryParams(GetJobRunsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetJobRunsHeaders headers;
    public GetJobRunsRequest withHeaders(GetJobRunsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetJobRunsRequest request;
    public GetJobRunsRequest withRequest(openapisdk.models.shared.GetJobRunsRequest request) {
        this.request = request;
        return this;
    }
}