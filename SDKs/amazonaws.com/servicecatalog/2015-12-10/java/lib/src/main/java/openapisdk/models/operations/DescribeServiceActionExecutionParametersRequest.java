package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeServiceActionExecutionParametersRequest {
    public DescribeServiceActionExecutionParametersHeaders headers;
    public DescribeServiceActionExecutionParametersRequest withHeaders(DescribeServiceActionExecutionParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeServiceActionExecutionParametersInput request;
    public DescribeServiceActionExecutionParametersRequest withRequest(openapisdk.models.shared.DescribeServiceActionExecutionParametersInput request) {
        this.request = request;
        return this;
    }
}