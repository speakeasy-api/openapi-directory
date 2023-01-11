package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkerBlocksRequest {
    public ListWorkerBlocksQueryParams queryParams;
    public ListWorkerBlocksRequest withQueryParams(ListWorkerBlocksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkerBlocksHeaders headers;
    public ListWorkerBlocksRequest withHeaders(ListWorkerBlocksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListWorkerBlocksRequest request;
    public ListWorkerBlocksRequest withRequest(openapisdk.models.shared.ListWorkerBlocksRequest request) {
        this.request = request;
        return this;
    }
}