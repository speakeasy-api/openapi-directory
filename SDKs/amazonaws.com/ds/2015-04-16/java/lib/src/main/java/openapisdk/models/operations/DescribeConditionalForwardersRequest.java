package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConditionalForwardersRequest {
    public DescribeConditionalForwardersHeaders headers;
    public DescribeConditionalForwardersRequest withHeaders(DescribeConditionalForwardersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConditionalForwardersRequest request;
    public DescribeConditionalForwardersRequest withRequest(openapisdk.models.shared.DescribeConditionalForwardersRequest request) {
        this.request = request;
        return this;
    }
}