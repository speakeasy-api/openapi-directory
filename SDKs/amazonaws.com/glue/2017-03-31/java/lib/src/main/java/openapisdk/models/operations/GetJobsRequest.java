package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobsRequest {
    public GetJobsQueryParams queryParams;
    public GetJobsRequest withQueryParams(GetJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetJobsHeaders headers;
    public GetJobsRequest withHeaders(GetJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetJobsRequest request;
    public GetJobsRequest withRequest(openapisdk.models.shared.GetJobsRequest request) {
        this.request = request;
        return this;
    }
}