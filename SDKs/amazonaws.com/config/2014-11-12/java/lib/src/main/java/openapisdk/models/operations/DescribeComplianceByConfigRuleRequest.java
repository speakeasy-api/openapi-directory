package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeComplianceByConfigRuleRequest {
    public DescribeComplianceByConfigRuleQueryParams queryParams;
    public DescribeComplianceByConfigRuleRequest withQueryParams(DescribeComplianceByConfigRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeComplianceByConfigRuleHeaders headers;
    public DescribeComplianceByConfigRuleRequest withHeaders(DescribeComplianceByConfigRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeComplianceByConfigRuleRequest request;
    public DescribeComplianceByConfigRuleRequest withRequest(openapisdk.models.shared.DescribeComplianceByConfigRuleRequest request) {
        this.request = request;
        return this;
    }
}