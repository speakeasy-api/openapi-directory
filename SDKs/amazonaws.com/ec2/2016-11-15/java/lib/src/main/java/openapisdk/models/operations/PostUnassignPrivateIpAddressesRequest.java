package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUnassignPrivateIpAddressesRequest {
    public PostUnassignPrivateIpAddressesQueryParams queryParams;
    public PostUnassignPrivateIpAddressesRequest withQueryParams(PostUnassignPrivateIpAddressesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUnassignPrivateIpAddressesHeaders headers;
    public PostUnassignPrivateIpAddressesRequest withHeaders(PostUnassignPrivateIpAddressesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUnassignPrivateIpAddressesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}