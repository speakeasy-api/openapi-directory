package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEntitiesRequest {
    public ListEntitiesQueryParams queryParams;
    public ListEntitiesRequest withQueryParams(ListEntitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEntitiesHeaders headers;
    public ListEntitiesRequest withHeaders(ListEntitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListEntitiesRequestBody request;
    public ListEntitiesRequest withRequest(ListEntitiesRequestBody request) {
        this.request = request;
        return this;
    }
}