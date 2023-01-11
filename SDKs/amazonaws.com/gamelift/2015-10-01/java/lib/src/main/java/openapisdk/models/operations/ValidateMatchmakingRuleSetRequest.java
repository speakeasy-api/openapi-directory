package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateMatchmakingRuleSetRequest {
    public ValidateMatchmakingRuleSetHeaders headers;
    public ValidateMatchmakingRuleSetRequest withHeaders(ValidateMatchmakingRuleSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ValidateMatchmakingRuleSetInput request;
    public ValidateMatchmakingRuleSetRequest withRequest(openapisdk.models.shared.ValidateMatchmakingRuleSetInput request) {
        this.request = request;
        return this;
    }
}