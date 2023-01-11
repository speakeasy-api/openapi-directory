package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMatchmakingRuleSetRequest {
    public DeleteMatchmakingRuleSetHeaders headers;
    public DeleteMatchmakingRuleSetRequest withHeaders(DeleteMatchmakingRuleSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteMatchmakingRuleSetInput request;
    public DeleteMatchmakingRuleSetRequest withRequest(openapisdk.models.shared.DeleteMatchmakingRuleSetInput request) {
        this.request = request;
        return this;
    }
}