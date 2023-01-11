package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAggregateComplianceByConfigRulesRequest {
    public DescribeAggregateComplianceByConfigRulesQueryParams queryParams;
    public DescribeAggregateComplianceByConfigRulesRequest withQueryParams(DescribeAggregateComplianceByConfigRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeAggregateComplianceByConfigRulesHeaders headers;
    public DescribeAggregateComplianceByConfigRulesRequest withHeaders(DescribeAggregateComplianceByConfigRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAggregateComplianceByConfigRulesRequest request;
    public DescribeAggregateComplianceByConfigRulesRequest withRequest(openapisdk.models.shared.DescribeAggregateComplianceByConfigRulesRequest request) {
        this.request = request;
        return this;
    }
}