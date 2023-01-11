package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGrantsRequest {
    public ListGrantsQueryParams queryParams;
    public ListGrantsRequest withQueryParams(ListGrantsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGrantsHeaders headers;
    public ListGrantsRequest withHeaders(ListGrantsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListGrantsRequest request;
    public ListGrantsRequest withRequest(openapisdk.models.shared.ListGrantsRequest request) {
        this.request = request;
        return this;
    }
}