package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSafetyRuleRequest {
    public UpdateSafetyRuleHeaders headers;
    public UpdateSafetyRuleRequest withHeaders(UpdateSafetyRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSafetyRuleRequestBody request;
    public UpdateSafetyRuleRequest withRequest(UpdateSafetyRuleRequestBody request) {
        this.request = request;
        return this;
    }
}