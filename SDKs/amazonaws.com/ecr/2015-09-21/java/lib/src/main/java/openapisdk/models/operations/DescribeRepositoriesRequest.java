package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRepositoriesRequest {
    public DescribeRepositoriesQueryParams queryParams;
    public DescribeRepositoriesRequest withQueryParams(DescribeRepositoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeRepositoriesHeaders headers;
    public DescribeRepositoriesRequest withHeaders(DescribeRepositoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRepositoriesRequest request;
    public DescribeRepositoriesRequest withRequest(openapisdk.models.shared.DescribeRepositoriesRequest request) {
        this.request = request;
        return this;
    }
}