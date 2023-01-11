package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConfigRuleEvaluationStatusRequest {
    public DescribeConfigRuleEvaluationStatusQueryParams queryParams;
    public DescribeConfigRuleEvaluationStatusRequest withQueryParams(DescribeConfigRuleEvaluationStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeConfigRuleEvaluationStatusHeaders headers;
    public DescribeConfigRuleEvaluationStatusRequest withHeaders(DescribeConfigRuleEvaluationStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConfigRuleEvaluationStatusRequest request;
    public DescribeConfigRuleEvaluationStatusRequest withRequest(openapisdk.models.shared.DescribeConfigRuleEvaluationStatusRequest request) {
        this.request = request;
        return this;
    }
}