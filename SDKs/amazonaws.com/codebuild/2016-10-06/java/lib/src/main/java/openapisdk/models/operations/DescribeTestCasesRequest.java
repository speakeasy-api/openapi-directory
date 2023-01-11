package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTestCasesRequest {
    public DescribeTestCasesQueryParams queryParams;
    public DescribeTestCasesRequest withQueryParams(DescribeTestCasesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeTestCasesHeaders headers;
    public DescribeTestCasesRequest withHeaders(DescribeTestCasesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTestCasesInput request;
    public DescribeTestCasesRequest withRequest(openapisdk.models.shared.DescribeTestCasesInput request) {
        this.request = request;
        return this;
    }
}