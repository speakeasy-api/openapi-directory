package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssignIpv6AddressesRequest {
    public PostAssignIpv6AddressesQueryParams queryParams;
    public PostAssignIpv6AddressesRequest withQueryParams(PostAssignIpv6AddressesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssignIpv6AddressesHeaders headers;
    public PostAssignIpv6AddressesRequest withHeaders(PostAssignIpv6AddressesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssignIpv6AddressesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}