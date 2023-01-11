package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAgentsRequest {
    public DescribeAgentsHeaders headers;
    public DescribeAgentsRequest withHeaders(DescribeAgentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAgentsRequest request;
    public DescribeAgentsRequest withRequest(openapisdk.models.shared.DescribeAgentsRequest request) {
        this.request = request;
        return this;
    }
}