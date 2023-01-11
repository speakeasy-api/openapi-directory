package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProtectionRequest {
    public DescribeProtectionHeaders headers;
    public DescribeProtectionRequest withHeaders(DescribeProtectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProtectionRequest request;
    public DescribeProtectionRequest withRequest(openapisdk.models.shared.DescribeProtectionRequest request) {
        this.request = request;
        return this;
    }
}