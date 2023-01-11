package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResolverEndpointIpAddressesRequest {
    public ListResolverEndpointIpAddressesQueryParams queryParams;
    public ListResolverEndpointIpAddressesRequest withQueryParams(ListResolverEndpointIpAddressesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResolverEndpointIpAddressesHeaders headers;
    public ListResolverEndpointIpAddressesRequest withHeaders(ListResolverEndpointIpAddressesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResolverEndpointIpAddressesRequest request;
    public ListResolverEndpointIpAddressesRequest withRequest(openapisdk.models.shared.ListResolverEndpointIpAddressesRequest request) {
        this.request = request;
        return this;
    }
}