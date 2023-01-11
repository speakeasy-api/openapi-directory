package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBuildBatchesRequest {
    public ListBuildBatchesQueryParams queryParams;
    public ListBuildBatchesRequest withQueryParams(ListBuildBatchesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBuildBatchesHeaders headers;
    public ListBuildBatchesRequest withHeaders(ListBuildBatchesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListBuildBatchesInput request;
    public ListBuildBatchesRequest withRequest(openapisdk.models.shared.ListBuildBatchesInput request) {
        this.request = request;
        return this;
    }
}