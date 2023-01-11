package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDeliveryChannelStatusRequest {
    public DescribeDeliveryChannelStatusHeaders headers;
    public DescribeDeliveryChannelStatusRequest withHeaders(DescribeDeliveryChannelStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDeliveryChannelStatusRequest request;
    public DescribeDeliveryChannelStatusRequest withRequest(openapisdk.models.shared.DescribeDeliveryChannelStatusRequest request) {
        this.request = request;
        return this;
    }
}