package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEc2InstanceLimitsRequest {
    public DescribeEc2InstanceLimitsHeaders headers;
    public DescribeEc2InstanceLimitsRequest withHeaders(DescribeEc2InstanceLimitsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEc2InstanceLimitsInput request;
    public DescribeEc2InstanceLimitsRequest withRequest(openapisdk.models.shared.DescribeEc2InstanceLimitsInput request) {
        this.request = request;
        return this;
    }
}