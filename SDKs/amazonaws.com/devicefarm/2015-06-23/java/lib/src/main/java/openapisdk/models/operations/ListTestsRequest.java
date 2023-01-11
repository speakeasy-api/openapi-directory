package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTestsRequest {
    public ListTestsQueryParams queryParams;
    public ListTestsRequest withQueryParams(ListTestsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTestsHeaders headers;
    public ListTestsRequest withHeaders(ListTestsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTestsRequest request;
    public ListTestsRequest withRequest(openapisdk.models.shared.ListTestsRequest request) {
        this.request = request;
        return this;
    }
}