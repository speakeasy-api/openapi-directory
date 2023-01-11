package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRaidArraysRequest {
    public DescribeRaidArraysHeaders headers;
    public DescribeRaidArraysRequest withHeaders(DescribeRaidArraysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRaidArraysRequest request;
    public DescribeRaidArraysRequest withRequest(openapisdk.models.shared.DescribeRaidArraysRequest request) {
        this.request = request;
        return this;
    }
}