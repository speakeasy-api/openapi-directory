package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeRegionsRequest {
    public PostDescribeRegionsQueryParams queryParams;
    public PostDescribeRegionsRequest withQueryParams(PostDescribeRegionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeRegionsHeaders headers;
    public PostDescribeRegionsRequest withHeaders(PostDescribeRegionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeRegionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}