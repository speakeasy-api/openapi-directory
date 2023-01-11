package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventTypesRequest {
    public ListEventTypesQueryParams queryParams;
    public ListEventTypesRequest withQueryParams(ListEventTypesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEventTypesHeaders headers;
    public ListEventTypesRequest withHeaders(ListEventTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListEventTypesRequestBody request;
    public ListEventTypesRequest withRequest(ListEventTypesRequestBody request) {
        this.request = request;
        return this;
    }
}