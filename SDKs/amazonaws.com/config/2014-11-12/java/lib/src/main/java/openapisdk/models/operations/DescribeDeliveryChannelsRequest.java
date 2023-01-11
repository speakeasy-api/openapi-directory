package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDeliveryChannelsRequest {
    public DescribeDeliveryChannelsHeaders headers;
    public DescribeDeliveryChannelsRequest withHeaders(DescribeDeliveryChannelsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDeliveryChannelsRequest request;
    public DescribeDeliveryChannelsRequest withRequest(openapisdk.models.shared.DescribeDeliveryChannelsRequest request) {
        this.request = request;
        return this;
    }
}