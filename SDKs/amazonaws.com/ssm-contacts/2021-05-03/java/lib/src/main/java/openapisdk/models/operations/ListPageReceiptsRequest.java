package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPageReceiptsRequest {
    public ListPageReceiptsQueryParams queryParams;
    public ListPageReceiptsRequest withQueryParams(ListPageReceiptsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPageReceiptsHeaders headers;
    public ListPageReceiptsRequest withHeaders(ListPageReceiptsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPageReceiptsRequest request;
    public ListPageReceiptsRequest withRequest(openapisdk.models.shared.ListPageReceiptsRequest request) {
        this.request = request;
        return this;
    }
}