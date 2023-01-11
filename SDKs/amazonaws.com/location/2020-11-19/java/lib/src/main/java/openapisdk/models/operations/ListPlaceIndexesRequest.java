package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPlaceIndexesRequest {
    public ListPlaceIndexesQueryParams queryParams;
    public ListPlaceIndexesRequest withQueryParams(ListPlaceIndexesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPlaceIndexesHeaders headers;
    public ListPlaceIndexesRequest withHeaders(ListPlaceIndexesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListPlaceIndexesRequestBody request;
    public ListPlaceIndexesRequest withRequest(ListPlaceIndexesRequestBody request) {
        this.request = request;
        return this;
    }
}