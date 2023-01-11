package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourceTypesRequest {
    public ListResourceTypesQueryParams queryParams;
    public ListResourceTypesRequest withQueryParams(ListResourceTypesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResourceTypesHeaders headers;
    public ListResourceTypesRequest withHeaders(ListResourceTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListResourceTypesRequestBody request;
    public ListResourceTypesRequest withRequest(ListResourceTypesRequestBody request) {
        this.request = request;
        return this;
    }
}