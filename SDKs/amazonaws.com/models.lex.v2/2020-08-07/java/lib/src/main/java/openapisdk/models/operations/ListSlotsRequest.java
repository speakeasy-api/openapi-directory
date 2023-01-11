package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSlotsRequest {
    public ListSlotsPathParams pathParams;
    public ListSlotsRequest withPathParams(ListSlotsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSlotsQueryParams queryParams;
    public ListSlotsRequest withQueryParams(ListSlotsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSlotsHeaders headers;
    public ListSlotsRequest withHeaders(ListSlotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListSlotsRequestBody request;
    public ListSlotsRequest withRequest(ListSlotsRequestBody request) {
        this.request = request;
        return this;
    }
}