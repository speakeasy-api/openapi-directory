package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeRouteTablesRequest {
    public PostDescribeRouteTablesQueryParams queryParams;
    public PostDescribeRouteTablesRequest withQueryParams(PostDescribeRouteTablesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeRouteTablesHeaders headers;
    public PostDescribeRouteTablesRequest withHeaders(PostDescribeRouteTablesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeRouteTablesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}