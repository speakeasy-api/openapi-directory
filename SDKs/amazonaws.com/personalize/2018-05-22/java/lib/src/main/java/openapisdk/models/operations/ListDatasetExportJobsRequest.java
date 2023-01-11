package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDatasetExportJobsRequest {
    public ListDatasetExportJobsQueryParams queryParams;
    public ListDatasetExportJobsRequest withQueryParams(ListDatasetExportJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDatasetExportJobsHeaders headers;
    public ListDatasetExportJobsRequest withHeaders(ListDatasetExportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDatasetExportJobsRequest request;
    public ListDatasetExportJobsRequest withRequest(openapisdk.models.shared.ListDatasetExportJobsRequest request) {
        this.request = request;
        return this;
    }
}