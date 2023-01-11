package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserPoolsRequest {
    public ListUserPoolsQueryParams queryParams;
    public ListUserPoolsRequest withQueryParams(ListUserPoolsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUserPoolsHeaders headers;
    public ListUserPoolsRequest withHeaders(ListUserPoolsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListUserPoolsRequest request;
    public ListUserPoolsRequest withRequest(openapisdk.models.shared.ListUserPoolsRequest request) {
        this.request = request;
        return this;
    }
}