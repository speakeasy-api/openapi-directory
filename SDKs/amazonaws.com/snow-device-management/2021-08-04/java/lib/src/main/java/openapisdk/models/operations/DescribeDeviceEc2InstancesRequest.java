package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDeviceEc2InstancesRequest {
    public DescribeDeviceEc2InstancesPathParams pathParams;
    public DescribeDeviceEc2InstancesRequest withPathParams(DescribeDeviceEc2InstancesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeDeviceEc2InstancesHeaders headers;
    public DescribeDeviceEc2InstancesRequest withHeaders(DescribeDeviceEc2InstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeDeviceEc2InstancesRequestBody request;
    public DescribeDeviceEc2InstancesRequest withRequest(DescribeDeviceEc2InstancesRequestBody request) {
        this.request = request;
        return this;
    }
}