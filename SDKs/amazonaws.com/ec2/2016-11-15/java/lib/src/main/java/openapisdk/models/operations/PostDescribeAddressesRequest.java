package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAddressesRequest {
    public PostDescribeAddressesQueryParams queryParams;
    public PostDescribeAddressesRequest withQueryParams(PostDescribeAddressesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAddressesHeaders headers;
    public PostDescribeAddressesRequest withHeaders(PostDescribeAddressesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAddressesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}