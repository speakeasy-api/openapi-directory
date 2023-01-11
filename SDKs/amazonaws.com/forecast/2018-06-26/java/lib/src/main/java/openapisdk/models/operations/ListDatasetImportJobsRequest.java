package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDatasetImportJobsRequest {
    public ListDatasetImportJobsQueryParams queryParams;
    public ListDatasetImportJobsRequest withQueryParams(ListDatasetImportJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDatasetImportJobsHeaders headers;
    public ListDatasetImportJobsRequest withHeaders(ListDatasetImportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDatasetImportJobsRequest request;
    public ListDatasetImportJobsRequest withRequest(openapisdk.models.shared.ListDatasetImportJobsRequest request) {
        this.request = request;
        return this;
    }
}