package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeIpv6PoolsRequest {
    public PostDescribeIpv6PoolsQueryParams queryParams;
    public PostDescribeIpv6PoolsRequest withQueryParams(PostDescribeIpv6PoolsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeIpv6PoolsHeaders headers;
    public PostDescribeIpv6PoolsRequest withHeaders(PostDescribeIpv6PoolsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeIpv6PoolsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}