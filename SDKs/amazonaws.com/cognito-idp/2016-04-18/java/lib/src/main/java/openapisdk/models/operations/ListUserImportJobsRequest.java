package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserImportJobsRequest {
    public ListUserImportJobsHeaders headers;
    public ListUserImportJobsRequest withHeaders(ListUserImportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListUserImportJobsRequest request;
    public ListUserImportJobsRequest withRequest(openapisdk.models.shared.ListUserImportJobsRequest request) {
        this.request = request;
        return this;
    }
}