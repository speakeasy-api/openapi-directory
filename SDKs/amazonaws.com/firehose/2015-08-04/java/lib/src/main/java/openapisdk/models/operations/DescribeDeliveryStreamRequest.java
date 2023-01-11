package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDeliveryStreamRequest {
    public DescribeDeliveryStreamHeaders headers;
    public DescribeDeliveryStreamRequest withHeaders(DescribeDeliveryStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDeliveryStreamInput request;
    public DescribeDeliveryStreamRequest withRequest(openapisdk.models.shared.DescribeDeliveryStreamInput request) {
        this.request = request;
        return this;
    }
}