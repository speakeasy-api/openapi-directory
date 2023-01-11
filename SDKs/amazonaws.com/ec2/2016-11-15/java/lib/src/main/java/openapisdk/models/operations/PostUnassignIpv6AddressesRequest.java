package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUnassignIpv6AddressesRequest {
    public PostUnassignIpv6AddressesQueryParams queryParams;
    public PostUnassignIpv6AddressesRequest withQueryParams(PostUnassignIpv6AddressesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUnassignIpv6AddressesHeaders headers;
    public PostUnassignIpv6AddressesRequest withHeaders(PostUnassignIpv6AddressesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUnassignIpv6AddressesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}