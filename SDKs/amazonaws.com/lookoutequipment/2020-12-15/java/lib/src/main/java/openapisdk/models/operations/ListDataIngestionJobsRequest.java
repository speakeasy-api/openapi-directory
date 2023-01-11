package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDataIngestionJobsRequest {
    public ListDataIngestionJobsQueryParams queryParams;
    public ListDataIngestionJobsRequest withQueryParams(ListDataIngestionJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDataIngestionJobsHeaders headers;
    public ListDataIngestionJobsRequest withHeaders(ListDataIngestionJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDataIngestionJobsRequest request;
    public ListDataIngestionJobsRequest withRequest(openapisdk.models.shared.ListDataIngestionJobsRequest request) {
        this.request = request;
        return this;
    }
}