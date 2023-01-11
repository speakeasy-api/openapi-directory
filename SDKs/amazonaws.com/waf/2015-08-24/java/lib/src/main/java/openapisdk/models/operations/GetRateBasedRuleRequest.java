package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRateBasedRuleRequest {
    public GetRateBasedRuleHeaders headers;
    public GetRateBasedRuleRequest withHeaders(GetRateBasedRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRateBasedRuleRequest request;
    public GetRateBasedRuleRequest withRequest(openapisdk.models.shared.GetRateBasedRuleRequest request) {
        this.request = request;
        return this;
    }
}