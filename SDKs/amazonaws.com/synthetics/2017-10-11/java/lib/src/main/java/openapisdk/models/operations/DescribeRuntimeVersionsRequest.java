package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRuntimeVersionsRequest {
    public DescribeRuntimeVersionsQueryParams queryParams;
    public DescribeRuntimeVersionsRequest withQueryParams(DescribeRuntimeVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeRuntimeVersionsHeaders headers;
    public DescribeRuntimeVersionsRequest withHeaders(DescribeRuntimeVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeRuntimeVersionsRequestBody request;
    public DescribeRuntimeVersionsRequest withRequest(DescribeRuntimeVersionsRequestBody request) {
        this.request = request;
        return this;
    }
}