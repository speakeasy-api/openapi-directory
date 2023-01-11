package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeMovingAddressesRequest {
    public PostDescribeMovingAddressesQueryParams queryParams;
    public PostDescribeMovingAddressesRequest withQueryParams(PostDescribeMovingAddressesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeMovingAddressesHeaders headers;
    public PostDescribeMovingAddressesRequest withHeaders(PostDescribeMovingAddressesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeMovingAddressesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}