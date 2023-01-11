package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFhirExportJobsRequest {
    public ListFhirExportJobsQueryParams queryParams;
    public ListFhirExportJobsRequest withQueryParams(ListFhirExportJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFhirExportJobsHeaders headers;
    public ListFhirExportJobsRequest withHeaders(ListFhirExportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFhirExportJobsRequest request;
    public ListFhirExportJobsRequest withRequest(openapisdk.models.shared.ListFhirExportJobsRequest request) {
        this.request = request;
        return this;
    }
}