package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLogStreamsRequest {
    public DescribeLogStreamsQueryParams queryParams;
    public DescribeLogStreamsRequest withQueryParams(DescribeLogStreamsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeLogStreamsHeaders headers;
    public DescribeLogStreamsRequest withHeaders(DescribeLogStreamsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLogStreamsRequest request;
    public DescribeLogStreamsRequest withRequest(openapisdk.models.shared.DescribeLogStreamsRequest request) {
        this.request = request;
        return this;
    }
}