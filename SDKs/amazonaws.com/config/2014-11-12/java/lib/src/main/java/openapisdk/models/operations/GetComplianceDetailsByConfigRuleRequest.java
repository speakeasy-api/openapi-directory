package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComplianceDetailsByConfigRuleRequest {
    public GetComplianceDetailsByConfigRuleQueryParams queryParams;
    public GetComplianceDetailsByConfigRuleRequest withQueryParams(GetComplianceDetailsByConfigRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetComplianceDetailsByConfigRuleHeaders headers;
    public GetComplianceDetailsByConfigRuleRequest withHeaders(GetComplianceDetailsByConfigRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetComplianceDetailsByConfigRuleRequest request;
    public GetComplianceDetailsByConfigRuleRequest withRequest(openapisdk.models.shared.GetComplianceDetailsByConfigRuleRequest request) {
        this.request = request;
        return this;
    }
}