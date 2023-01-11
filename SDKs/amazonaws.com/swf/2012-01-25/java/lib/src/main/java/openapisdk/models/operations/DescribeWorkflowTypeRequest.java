package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkflowTypeRequest {
    public DescribeWorkflowTypeHeaders headers;
    public DescribeWorkflowTypeRequest withHeaders(DescribeWorkflowTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeWorkflowTypeInput request;
    public DescribeWorkflowTypeRequest withRequest(openapisdk.models.shared.DescribeWorkflowTypeInput request) {
        this.request = request;
        return this;
    }
}