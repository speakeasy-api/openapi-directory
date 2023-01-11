package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFirewallRequest {
    public DescribeFirewallHeaders headers;
    public DescribeFirewallRequest withHeaders(DescribeFirewallHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFirewallRequest request;
    public DescribeFirewallRequest withRequest(openapisdk.models.shared.DescribeFirewallRequest request) {
        this.request = request;
        return this;
    }
}