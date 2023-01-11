package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAcLsRequest {
    public DescribeAcLsHeaders headers;
    public DescribeAcLsRequest withHeaders(DescribeAcLsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAcLsRequest request;
    public DescribeAcLsRequest withRequest(openapisdk.models.shared.DescribeAcLsRequest request) {
        this.request = request;
        return this;
    }
}