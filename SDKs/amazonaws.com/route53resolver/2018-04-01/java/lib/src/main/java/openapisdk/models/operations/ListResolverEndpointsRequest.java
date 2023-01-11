package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResolverEndpointsRequest {
    public ListResolverEndpointsQueryParams queryParams;
    public ListResolverEndpointsRequest withQueryParams(ListResolverEndpointsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResolverEndpointsHeaders headers;
    public ListResolverEndpointsRequest withHeaders(ListResolverEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResolverEndpointsRequest request;
    public ListResolverEndpointsRequest withRequest(openapisdk.models.shared.ListResolverEndpointsRequest request) {
        this.request = request;
        return this;
    }
}