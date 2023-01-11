package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDataSourcesRequest {
    public DescribeDataSourcesQueryParams queryParams;
    public DescribeDataSourcesRequest withQueryParams(DescribeDataSourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeDataSourcesHeaders headers;
    public DescribeDataSourcesRequest withHeaders(DescribeDataSourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDataSourcesInput request;
    public DescribeDataSourcesRequest withRequest(openapisdk.models.shared.DescribeDataSourcesInput request) {
        this.request = request;
        return this;
    }
}