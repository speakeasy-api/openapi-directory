package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTypedLinkFacetAttributesRequest {
    public ListTypedLinkFacetAttributesQueryParams queryParams;
    public ListTypedLinkFacetAttributesRequest withQueryParams(ListTypedLinkFacetAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTypedLinkFacetAttributesHeaders headers;
    public ListTypedLinkFacetAttributesRequest withHeaders(ListTypedLinkFacetAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListTypedLinkFacetAttributesRequestBody request;
    public ListTypedLinkFacetAttributesRequest withRequest(ListTypedLinkFacetAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}