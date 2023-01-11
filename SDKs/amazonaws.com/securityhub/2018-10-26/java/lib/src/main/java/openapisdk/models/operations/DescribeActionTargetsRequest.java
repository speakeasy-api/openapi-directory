package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeActionTargetsRequest {
    public DescribeActionTargetsQueryParams queryParams;
    public DescribeActionTargetsRequest withQueryParams(DescribeActionTargetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeActionTargetsHeaders headers;
    public DescribeActionTargetsRequest withHeaders(DescribeActionTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeActionTargetsRequestBody request;
    public DescribeActionTargetsRequest withRequest(DescribeActionTargetsRequestBody request) {
        this.request = request;
        return this;
    }
}