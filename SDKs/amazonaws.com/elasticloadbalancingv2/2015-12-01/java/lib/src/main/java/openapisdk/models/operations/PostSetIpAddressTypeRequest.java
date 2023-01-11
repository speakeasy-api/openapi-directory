package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetIpAddressTypeRequest {
    public PostSetIpAddressTypeQueryParams queryParams;
    public PostSetIpAddressTypeRequest withQueryParams(PostSetIpAddressTypeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetIpAddressTypeHeaders headers;
    public PostSetIpAddressTypeRequest withHeaders(PostSetIpAddressTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetIpAddressTypeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}