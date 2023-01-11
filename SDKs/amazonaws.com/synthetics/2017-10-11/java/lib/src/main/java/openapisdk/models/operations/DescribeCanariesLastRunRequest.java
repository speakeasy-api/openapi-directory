package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCanariesLastRunRequest {
    public DescribeCanariesLastRunQueryParams queryParams;
    public DescribeCanariesLastRunRequest withQueryParams(DescribeCanariesLastRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeCanariesLastRunHeaders headers;
    public DescribeCanariesLastRunRequest withHeaders(DescribeCanariesLastRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeCanariesLastRunRequestBody request;
    public DescribeCanariesLastRunRequest withRequest(DescribeCanariesLastRunRequestBody request) {
        this.request = request;
        return this;
    }
}