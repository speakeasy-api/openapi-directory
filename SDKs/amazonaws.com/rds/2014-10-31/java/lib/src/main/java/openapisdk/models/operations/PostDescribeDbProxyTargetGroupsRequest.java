package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbProxyTargetGroupsRequest {
    public PostDescribeDbProxyTargetGroupsQueryParams queryParams;
    public PostDescribeDbProxyTargetGroupsRequest withQueryParams(PostDescribeDbProxyTargetGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbProxyTargetGroupsHeaders headers;
    public PostDescribeDbProxyTargetGroupsRequest withHeaders(PostDescribeDbProxyTargetGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbProxyTargetGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}