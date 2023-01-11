package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTypedLinkFacetNamesRequest {
    public ListTypedLinkFacetNamesQueryParams queryParams;
    public ListTypedLinkFacetNamesRequest withQueryParams(ListTypedLinkFacetNamesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTypedLinkFacetNamesHeaders headers;
    public ListTypedLinkFacetNamesRequest withHeaders(ListTypedLinkFacetNamesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListTypedLinkFacetNamesRequestBody request;
    public ListTypedLinkFacetNamesRequest withRequest(ListTypedLinkFacetNamesRequestBody request) {
        this.request = request;
        return this;
    }
}