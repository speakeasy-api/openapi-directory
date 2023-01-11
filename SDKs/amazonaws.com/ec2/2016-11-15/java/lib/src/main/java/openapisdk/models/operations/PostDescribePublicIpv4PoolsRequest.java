package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePublicIpv4PoolsRequest {
    public PostDescribePublicIpv4PoolsQueryParams queryParams;
    public PostDescribePublicIpv4PoolsRequest withQueryParams(PostDescribePublicIpv4PoolsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribePublicIpv4PoolsHeaders headers;
    public PostDescribePublicIpv4PoolsRequest withHeaders(PostDescribePublicIpv4PoolsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribePublicIpv4PoolsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}