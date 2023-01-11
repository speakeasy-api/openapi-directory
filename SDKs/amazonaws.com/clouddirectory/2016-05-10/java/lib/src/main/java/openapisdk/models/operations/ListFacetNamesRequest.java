package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFacetNamesRequest {
    public ListFacetNamesQueryParams queryParams;
    public ListFacetNamesRequest withQueryParams(ListFacetNamesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFacetNamesHeaders headers;
    public ListFacetNamesRequest withHeaders(ListFacetNamesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListFacetNamesRequestBody request;
    public ListFacetNamesRequest withRequest(ListFacetNamesRequestBody request) {
        this.request = request;
        return this;
    }
}