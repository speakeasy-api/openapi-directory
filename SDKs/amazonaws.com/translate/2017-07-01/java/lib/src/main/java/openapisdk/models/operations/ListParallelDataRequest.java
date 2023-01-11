package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListParallelDataRequest {
    public ListParallelDataQueryParams queryParams;
    public ListParallelDataRequest withQueryParams(ListParallelDataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListParallelDataHeaders headers;
    public ListParallelDataRequest withHeaders(ListParallelDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListParallelDataRequest request;
    public ListParallelDataRequest withRequest(openapisdk.models.shared.ListParallelDataRequest request) {
        this.request = request;
        return this;
    }
}