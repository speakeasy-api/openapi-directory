package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProjectsRequest {
    public DescribeProjectsQueryParams queryParams;
    public DescribeProjectsRequest withQueryParams(DescribeProjectsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeProjectsHeaders headers;
    public DescribeProjectsRequest withHeaders(DescribeProjectsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProjectsRequest request;
    public DescribeProjectsRequest withRequest(openapisdk.models.shared.DescribeProjectsRequest request) {
        this.request = request;
        return this;
    }
}