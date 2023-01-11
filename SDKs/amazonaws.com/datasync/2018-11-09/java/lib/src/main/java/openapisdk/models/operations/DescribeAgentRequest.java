package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAgentRequest {
    public DescribeAgentHeaders headers;
    public DescribeAgentRequest withHeaders(DescribeAgentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAgentRequest request;
    public DescribeAgentRequest withRequest(openapisdk.models.shared.DescribeAgentRequest request) {
        this.request = request;
        return this;
    }
}