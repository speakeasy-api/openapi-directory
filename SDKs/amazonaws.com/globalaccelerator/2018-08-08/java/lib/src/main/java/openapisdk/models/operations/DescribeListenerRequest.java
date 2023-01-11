package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeListenerRequest {
    public DescribeListenerHeaders headers;
    public DescribeListenerRequest withHeaders(DescribeListenerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeListenerRequest request;
    public DescribeListenerRequest withRequest(openapisdk.models.shared.DescribeListenerRequest request) {
        this.request = request;
        return this;
    }
}