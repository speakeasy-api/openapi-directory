package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMatchmakingRuleSetRequest {
    public CreateMatchmakingRuleSetHeaders headers;
    public CreateMatchmakingRuleSetRequest withHeaders(CreateMatchmakingRuleSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateMatchmakingRuleSetInput request;
    public CreateMatchmakingRuleSetRequest withRequest(openapisdk.models.shared.CreateMatchmakingRuleSetInput request) {
        this.request = request;
        return this;
    }
}