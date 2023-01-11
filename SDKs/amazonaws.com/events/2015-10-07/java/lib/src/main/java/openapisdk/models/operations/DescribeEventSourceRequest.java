package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEventSourceRequest {
    public DescribeEventSourceHeaders headers;
    public DescribeEventSourceRequest withHeaders(DescribeEventSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEventSourceRequest request;
    public DescribeEventSourceRequest withRequest(openapisdk.models.shared.DescribeEventSourceRequest request) {
        this.request = request;
        return this;
    }
}