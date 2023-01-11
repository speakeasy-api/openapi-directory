package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSecurityPolicyRequest {
    public DescribeSecurityPolicyHeaders headers;
    public DescribeSecurityPolicyRequest withHeaders(DescribeSecurityPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSecurityPolicyRequest request;
    public DescribeSecurityPolicyRequest withRequest(openapisdk.models.shared.DescribeSecurityPolicyRequest request) {
        this.request = request;
        return this;
    }
}