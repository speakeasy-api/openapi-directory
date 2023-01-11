package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSignalingChannelRequest {
    public DescribeSignalingChannelHeaders headers;
    public DescribeSignalingChannelRequest withHeaders(DescribeSignalingChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeSignalingChannelRequestBody request;
    public DescribeSignalingChannelRequest withRequest(DescribeSignalingChannelRequestBody request) {
        this.request = request;
        return this;
    }
}