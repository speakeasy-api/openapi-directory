package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProtectionGroupRequest {
    public DescribeProtectionGroupHeaders headers;
    public DescribeProtectionGroupRequest withHeaders(DescribeProtectionGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProtectionGroupRequest request;
    public DescribeProtectionGroupRequest withRequest(openapisdk.models.shared.DescribeProtectionGroupRequest request) {
        this.request = request;
        return this;
    }
}