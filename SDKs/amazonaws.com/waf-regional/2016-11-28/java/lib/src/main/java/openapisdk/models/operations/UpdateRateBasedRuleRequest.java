package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRateBasedRuleRequest {
    public UpdateRateBasedRuleHeaders headers;
    public UpdateRateBasedRuleRequest withHeaders(UpdateRateBasedRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRateBasedRuleRequest request;
    public UpdateRateBasedRuleRequest withRequest(openapisdk.models.shared.UpdateRateBasedRuleRequest request) {
        this.request = request;
        return this;
    }
}