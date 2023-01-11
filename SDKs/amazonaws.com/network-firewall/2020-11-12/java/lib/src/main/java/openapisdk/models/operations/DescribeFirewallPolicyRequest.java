package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFirewallPolicyRequest {
    public DescribeFirewallPolicyHeaders headers;
    public DescribeFirewallPolicyRequest withHeaders(DescribeFirewallPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFirewallPolicyRequest request;
    public DescribeFirewallPolicyRequest withRequest(openapisdk.models.shared.DescribeFirewallPolicyRequest request) {
        this.request = request;
        return this;
    }
}