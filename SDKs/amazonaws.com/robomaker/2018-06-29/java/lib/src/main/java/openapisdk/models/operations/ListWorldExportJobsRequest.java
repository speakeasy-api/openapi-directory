package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorldExportJobsRequest {
    public ListWorldExportJobsQueryParams queryParams;
    public ListWorldExportJobsRequest withQueryParams(ListWorldExportJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorldExportJobsHeaders headers;
    public ListWorldExportJobsRequest withHeaders(ListWorldExportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListWorldExportJobsRequestBody request;
    public ListWorldExportJobsRequest withRequest(ListWorldExportJobsRequestBody request) {
        this.request = request;
        return this;
    }
}