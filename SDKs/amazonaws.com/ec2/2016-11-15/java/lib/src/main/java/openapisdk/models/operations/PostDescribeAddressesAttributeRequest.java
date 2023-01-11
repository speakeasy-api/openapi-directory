package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAddressesAttributeRequest {
    public PostDescribeAddressesAttributeQueryParams queryParams;
    public PostDescribeAddressesAttributeRequest withQueryParams(PostDescribeAddressesAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAddressesAttributeHeaders headers;
    public PostDescribeAddressesAttributeRequest withHeaders(PostDescribeAddressesAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAddressesAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}