package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSessionsRequest {
    public DescribeSessionsHeaders headers;
    public DescribeSessionsRequest withHeaders(DescribeSessionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSessionsRequest request;
    public DescribeSessionsRequest withRequest(openapisdk.models.shared.DescribeSessionsRequest request) {
        this.request = request;
        return this;
    }
}