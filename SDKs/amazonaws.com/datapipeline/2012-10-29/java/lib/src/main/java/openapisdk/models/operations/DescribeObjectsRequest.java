package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeObjectsRequest {
    public DescribeObjectsQueryParams queryParams;
    public DescribeObjectsRequest withQueryParams(DescribeObjectsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeObjectsHeaders headers;
    public DescribeObjectsRequest withHeaders(DescribeObjectsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeObjectsInput request;
    public DescribeObjectsRequest withRequest(openapisdk.models.shared.DescribeObjectsInput request) {
        this.request = request;
        return this;
    }
}