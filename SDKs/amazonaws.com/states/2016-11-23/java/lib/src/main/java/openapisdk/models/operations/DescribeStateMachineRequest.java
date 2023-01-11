package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStateMachineRequest {
    public DescribeStateMachineHeaders headers;
    public DescribeStateMachineRequest withHeaders(DescribeStateMachineHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeStateMachineInput request;
    public DescribeStateMachineRequest withRequest(openapisdk.models.shared.DescribeStateMachineInput request) {
        this.request = request;
        return this;
    }
}