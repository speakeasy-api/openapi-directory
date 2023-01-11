package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMailboxExportJobsRequest {
    public ListMailboxExportJobsQueryParams queryParams;
    public ListMailboxExportJobsRequest withQueryParams(ListMailboxExportJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMailboxExportJobsHeaders headers;
    public ListMailboxExportJobsRequest withHeaders(ListMailboxExportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListMailboxExportJobsRequest request;
    public ListMailboxExportJobsRequest withRequest(openapisdk.models.shared.ListMailboxExportJobsRequest request) {
        this.request = request;
        return this;
    }
}