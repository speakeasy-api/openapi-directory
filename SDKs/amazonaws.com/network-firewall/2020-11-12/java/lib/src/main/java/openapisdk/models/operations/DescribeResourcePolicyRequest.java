package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeResourcePolicyRequest {
    public DescribeResourcePolicyHeaders headers;
    public DescribeResourcePolicyRequest withHeaders(DescribeResourcePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeResourcePolicyRequest request;
    public DescribeResourcePolicyRequest withRequest(openapisdk.models.shared.DescribeResourcePolicyRequest request) {
        this.request = request;
        return this;
    }
}