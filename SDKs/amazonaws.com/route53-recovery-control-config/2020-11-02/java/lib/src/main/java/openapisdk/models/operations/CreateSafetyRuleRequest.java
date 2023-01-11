package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSafetyRuleRequest {
    public CreateSafetyRuleHeaders headers;
    public CreateSafetyRuleRequest withHeaders(CreateSafetyRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSafetyRuleRequestBody request;
    public CreateSafetyRuleRequest withRequest(CreateSafetyRuleRequestBody request) {
        this.request = request;
        return this;
    }
}