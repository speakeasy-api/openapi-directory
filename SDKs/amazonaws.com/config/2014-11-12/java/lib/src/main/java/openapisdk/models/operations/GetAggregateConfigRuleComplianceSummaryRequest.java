package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAggregateConfigRuleComplianceSummaryRequest {
    public GetAggregateConfigRuleComplianceSummaryQueryParams queryParams;
    public GetAggregateConfigRuleComplianceSummaryRequest withQueryParams(GetAggregateConfigRuleComplianceSummaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAggregateConfigRuleComplianceSummaryHeaders headers;
    public GetAggregateConfigRuleComplianceSummaryRequest withHeaders(GetAggregateConfigRuleComplianceSummaryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAggregateConfigRuleComplianceSummaryRequest request;
    public GetAggregateConfigRuleComplianceSummaryRequest withRequest(openapisdk.models.shared.GetAggregateConfigRuleComplianceSummaryRequest request) {
        this.request = request;
        return this;
    }
}