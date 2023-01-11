package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRateBasedRuleRequest {
    public CreateRateBasedRuleHeaders headers;
    public CreateRateBasedRuleRequest withHeaders(CreateRateBasedRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRateBasedRuleRequest request;
    public CreateRateBasedRuleRequest withRequest(openapisdk.models.shared.CreateRateBasedRuleRequest request) {
        this.request = request;
        return this;
    }
}