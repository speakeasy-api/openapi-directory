package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFleetsRequest {
    public ListFleetsQueryParams queryParams;
    public ListFleetsRequest withQueryParams(ListFleetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFleetsHeaders headers;
    public ListFleetsRequest withHeaders(ListFleetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListFleetsRequestBody request;
    public ListFleetsRequest withRequest(ListFleetsRequestBody request) {
        this.request = request;
        return this;
    }
}