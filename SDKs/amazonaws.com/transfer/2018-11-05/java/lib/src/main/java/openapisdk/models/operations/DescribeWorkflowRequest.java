package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkflowRequest {
    public DescribeWorkflowHeaders headers;
    public DescribeWorkflowRequest withHeaders(DescribeWorkflowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeWorkflowRequest request;
    public DescribeWorkflowRequest withRequest(openapisdk.models.shared.DescribeWorkflowRequest request) {
        this.request = request;
        return this;
    }
}