package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCustomRoutingListenerRequest {
    public DescribeCustomRoutingListenerHeaders headers;
    public DescribeCustomRoutingListenerRequest withHeaders(DescribeCustomRoutingListenerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCustomRoutingListenerRequest request;
    public DescribeCustomRoutingListenerRequest withRequest(openapisdk.models.shared.DescribeCustomRoutingListenerRequest request) {
        this.request = request;
        return this;
    }
}