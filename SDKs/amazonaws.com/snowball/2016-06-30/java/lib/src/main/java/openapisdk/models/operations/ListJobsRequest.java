package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobsRequest {
    public ListJobsQueryParams queryParams;
    public ListJobsRequest withQueryParams(ListJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListJobsHeaders headers;
    public ListJobsRequest withHeaders(ListJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListJobsRequest request;
    public ListJobsRequest withRequest(openapisdk.models.shared.ListJobsRequest request) {
        this.request = request;
        return this;
    }
}