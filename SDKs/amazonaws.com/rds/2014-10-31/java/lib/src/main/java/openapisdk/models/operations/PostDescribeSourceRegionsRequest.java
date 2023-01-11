package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSourceRegionsRequest {
    public PostDescribeSourceRegionsQueryParams queryParams;
    public PostDescribeSourceRegionsRequest withQueryParams(PostDescribeSourceRegionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSourceRegionsHeaders headers;
    public PostDescribeSourceRegionsRequest withHeaders(PostDescribeSourceRegionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSourceRegionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}