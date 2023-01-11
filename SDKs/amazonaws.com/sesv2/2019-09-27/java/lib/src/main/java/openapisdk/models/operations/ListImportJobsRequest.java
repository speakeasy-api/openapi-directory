package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListImportJobsRequest {
    public ListImportJobsQueryParams queryParams;
    public ListImportJobsRequest withQueryParams(ListImportJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListImportJobsHeaders headers;
    public ListImportJobsRequest withHeaders(ListImportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListImportJobsRequestBody request;
    public ListImportJobsRequest withRequest(ListImportJobsRequestBody request) {
        this.request = request;
        return this;
    }
}