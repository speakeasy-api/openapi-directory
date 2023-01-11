package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssignPrivateIpAddressesRequest {
    public PostAssignPrivateIpAddressesQueryParams queryParams;
    public PostAssignPrivateIpAddressesRequest withQueryParams(PostAssignPrivateIpAddressesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssignPrivateIpAddressesHeaders headers;
    public PostAssignPrivateIpAddressesRequest withHeaders(PostAssignPrivateIpAddressesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssignPrivateIpAddressesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}