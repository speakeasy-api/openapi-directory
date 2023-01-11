package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRuleGroupRequest {
    public DescribeRuleGroupHeaders headers;
    public DescribeRuleGroupRequest withHeaders(DescribeRuleGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRuleGroupRequest request;
    public DescribeRuleGroupRequest withRequest(openapisdk.models.shared.DescribeRuleGroupRequest request) {
        this.request = request;
        return this;
    }
}