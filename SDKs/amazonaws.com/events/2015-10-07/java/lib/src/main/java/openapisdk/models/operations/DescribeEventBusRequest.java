package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEventBusRequest {
    public DescribeEventBusHeaders headers;
    public DescribeEventBusRequest withHeaders(DescribeEventBusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEventBusRequest request;
    public DescribeEventBusRequest withRequest(openapisdk.models.shared.DescribeEventBusRequest request) {
        this.request = request;
        return this;
    }
}