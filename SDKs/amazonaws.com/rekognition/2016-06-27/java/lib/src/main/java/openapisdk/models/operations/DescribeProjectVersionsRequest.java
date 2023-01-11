package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProjectVersionsRequest {
    public DescribeProjectVersionsQueryParams queryParams;
    public DescribeProjectVersionsRequest withQueryParams(DescribeProjectVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeProjectVersionsHeaders headers;
    public DescribeProjectVersionsRequest withHeaders(DescribeProjectVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProjectVersionsRequest request;
    public DescribeProjectVersionsRequest withRequest(openapisdk.models.shared.DescribeProjectVersionsRequest request) {
        this.request = request;
        return this;
    }
}