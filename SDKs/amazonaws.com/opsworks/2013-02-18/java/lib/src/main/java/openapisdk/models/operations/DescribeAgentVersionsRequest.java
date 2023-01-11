package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAgentVersionsRequest {
    public DescribeAgentVersionsHeaders headers;
    public DescribeAgentVersionsRequest withHeaders(DescribeAgentVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAgentVersionsRequest request;
    public DescribeAgentVersionsRequest withRequest(openapisdk.models.shared.DescribeAgentVersionsRequest request) {
        this.request = request;
        return this;
    }
}