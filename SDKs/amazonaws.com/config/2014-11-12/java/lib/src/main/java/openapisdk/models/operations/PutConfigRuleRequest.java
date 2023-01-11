package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConfigRuleRequest {
    public PutConfigRuleHeaders headers;
    public PutConfigRuleRequest withHeaders(PutConfigRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutConfigRuleRequest request;
    public PutConfigRuleRequest withRequest(openapisdk.models.shared.PutConfigRuleRequest request) {
        this.request = request;
        return this;
    }
}