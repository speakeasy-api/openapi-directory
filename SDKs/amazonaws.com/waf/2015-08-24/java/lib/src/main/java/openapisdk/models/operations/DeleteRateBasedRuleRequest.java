package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRateBasedRuleRequest {
    public DeleteRateBasedRuleHeaders headers;
    public DeleteRateBasedRuleRequest withHeaders(DeleteRateBasedRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRateBasedRuleRequest request;
    public DeleteRateBasedRuleRequest withRequest(openapisdk.models.shared.DeleteRateBasedRuleRequest request) {
        this.request = request;
        return this;
    }
}