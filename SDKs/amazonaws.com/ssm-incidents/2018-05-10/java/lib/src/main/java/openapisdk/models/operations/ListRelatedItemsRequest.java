package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRelatedItemsRequest {
    public ListRelatedItemsQueryParams queryParams;
    public ListRelatedItemsRequest withQueryParams(ListRelatedItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRelatedItemsHeaders headers;
    public ListRelatedItemsRequest withHeaders(ListRelatedItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListRelatedItemsRequestBody request;
    public ListRelatedItemsRequest withRequest(ListRelatedItemsRequestBody request) {
        this.request = request;
        return this;
    }
}