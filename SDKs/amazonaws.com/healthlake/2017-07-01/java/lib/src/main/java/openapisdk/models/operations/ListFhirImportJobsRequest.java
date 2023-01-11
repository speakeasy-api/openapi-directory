package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFhirImportJobsRequest {
    public ListFhirImportJobsQueryParams queryParams;
    public ListFhirImportJobsRequest withQueryParams(ListFhirImportJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFhirImportJobsHeaders headers;
    public ListFhirImportJobsRequest withHeaders(ListFhirImportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFhirImportJobsRequest request;
    public ListFhirImportJobsRequest withRequest(openapisdk.models.shared.ListFhirImportJobsRequest request) {
        this.request = request;
        return this;
    }
}