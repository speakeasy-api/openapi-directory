package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBuildBatchesForProjectRequest {
    public ListBuildBatchesForProjectQueryParams queryParams;
    public ListBuildBatchesForProjectRequest withQueryParams(ListBuildBatchesForProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBuildBatchesForProjectHeaders headers;
    public ListBuildBatchesForProjectRequest withHeaders(ListBuildBatchesForProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListBuildBatchesForProjectInput request;
    public ListBuildBatchesForProjectRequest withRequest(openapisdk.models.shared.ListBuildBatchesForProjectInput request) {
        this.request = request;
        return this;
    }
}