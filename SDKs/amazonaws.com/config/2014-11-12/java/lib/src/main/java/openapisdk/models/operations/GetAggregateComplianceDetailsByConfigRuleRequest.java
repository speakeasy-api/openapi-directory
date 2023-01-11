package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAggregateComplianceDetailsByConfigRuleRequest {
    public GetAggregateComplianceDetailsByConfigRuleQueryParams queryParams;
    public GetAggregateComplianceDetailsByConfigRuleRequest withQueryParams(GetAggregateComplianceDetailsByConfigRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAggregateComplianceDetailsByConfigRuleHeaders headers;
    public GetAggregateComplianceDetailsByConfigRuleRequest withHeaders(GetAggregateComplianceDetailsByConfigRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAggregateComplianceDetailsByConfigRuleRequest request;
    public GetAggregateComplianceDetailsByConfigRuleRequest withRequest(openapisdk.models.shared.GetAggregateComplianceDetailsByConfigRuleRequest request) {
        this.request = request;
        return this;
    }
}