package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableRuleRequest {
    public EnableRuleHeaders headers;
    public EnableRuleRequest withHeaders(EnableRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableRuleRequest request;
    public EnableRuleRequest withRequest(openapisdk.models.shared.EnableRuleRequest request) {
        this.request = request;
        return this;
    }
}