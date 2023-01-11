package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTargetGroupsRequest {
    public PostDescribeTargetGroupsQueryParams queryParams;
    public PostDescribeTargetGroupsRequest withQueryParams(PostDescribeTargetGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTargetGroupsHeaders headers;
    public PostDescribeTargetGroupsRequest withHeaders(PostDescribeTargetGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTargetGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}