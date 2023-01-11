package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRuleRequest {
    public DescribeRuleHeaders headers;
    public DescribeRuleRequest withHeaders(DescribeRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRuleRequest request;
    public DescribeRuleRequest withRequest(openapisdk.models.shared.DescribeRuleRequest request) {
        this.request = request;
        return this;
    }
}