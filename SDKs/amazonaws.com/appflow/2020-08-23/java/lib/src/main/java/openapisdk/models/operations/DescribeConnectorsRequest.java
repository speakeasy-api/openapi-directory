package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConnectorsRequest {
    public DescribeConnectorsQueryParams queryParams;
    public DescribeConnectorsRequest withQueryParams(DescribeConnectorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeConnectorsHeaders headers;
    public DescribeConnectorsRequest withHeaders(DescribeConnectorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeConnectorsRequestBody request;
    public DescribeConnectorsRequest withRequest(DescribeConnectorsRequestBody request) {
        this.request = request;
        return this;
    }
}