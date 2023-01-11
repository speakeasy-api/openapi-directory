package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeResourcePoliciesRequest {
    public DescribeResourcePoliciesHeaders headers;
    public DescribeResourcePoliciesRequest withHeaders(DescribeResourcePoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeResourcePoliciesRequest request;
    public DescribeResourcePoliciesRequest withRequest(openapisdk.models.shared.DescribeResourcePoliciesRequest request) {
        this.request = request;
        return this;
    }
}