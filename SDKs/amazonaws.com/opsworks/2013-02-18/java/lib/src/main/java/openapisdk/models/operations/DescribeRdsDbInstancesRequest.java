package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRdsDbInstancesRequest {
    public DescribeRdsDbInstancesHeaders headers;
    public DescribeRdsDbInstancesRequest withHeaders(DescribeRdsDbInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRdsDbInstancesRequest request;
    public DescribeRdsDbInstancesRequest withRequest(openapisdk.models.shared.DescribeRdsDbInstancesRequest request) {
        this.request = request;
        return this;
    }
}