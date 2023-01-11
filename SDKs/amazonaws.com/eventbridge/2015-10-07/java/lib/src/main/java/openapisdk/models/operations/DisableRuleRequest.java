package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableRuleRequest {
    public DisableRuleHeaders headers;
    public DisableRuleRequest withHeaders(DisableRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableRuleRequest request;
    public DisableRuleRequest withRequest(openapisdk.models.shared.DisableRuleRequest request) {
        this.request = request;
        return this;
    }
}