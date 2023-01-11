package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFacetAttributesRequest {
    public ListFacetAttributesQueryParams queryParams;
    public ListFacetAttributesRequest withQueryParams(ListFacetAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFacetAttributesHeaders headers;
    public ListFacetAttributesRequest withHeaders(ListFacetAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListFacetAttributesRequestBody request;
    public ListFacetAttributesRequest withRequest(ListFacetAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}