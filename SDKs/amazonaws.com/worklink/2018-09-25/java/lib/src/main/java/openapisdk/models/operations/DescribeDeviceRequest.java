package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDeviceRequest {
    public DescribeDeviceHeaders headers;
    public DescribeDeviceRequest withHeaders(DescribeDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeDeviceRequestBody request;
    public DescribeDeviceRequest withRequest(DescribeDeviceRequestBody request) {
        this.request = request;
        return this;
    }
}